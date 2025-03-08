const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log("Received Authorization Header:", authHeader);

    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        console.error("Authorization token is missing!");
        return res.status(401).json({ message: 'Authorization token is required.' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret', (err, user) => {
        if (err) {
            console.error("JWT Verification Error:", err);
            return res.status(403).json({ message: 'Invalid or expired token.' });
        }
        req.user = user;
        console.log("User authenticated:", req.user); 
        next();
    });
};

module.exports = authenticateToken;
