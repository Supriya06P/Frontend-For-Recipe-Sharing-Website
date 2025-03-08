const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
    console.log("Received Signup Request:", req.body);

    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required!' });
        }

        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email is already in use.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();

        const token = jwt.sign(
            { userId: savedUser._id },
            process.env.JWT_SECRET || 'defaultsecret',
            { expiresIn: '1h' }
        );

        res.status(201).json({ success: true, username: savedUser.username, token });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});


router.post('/login', async (req, res) => {
    console.log("Received Login Request:", req.body);
    
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET || 'defaultsecret',
            { expiresIn: '1h' }
        );

        res.json({ success: true, username: user.username, token });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
});

module.exports = router;
