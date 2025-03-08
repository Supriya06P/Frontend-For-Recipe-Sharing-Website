const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe'); 
const authenticateToken = require('../middleware/authenticateToken'); 

router.get('/', authenticateToken, async (req, res) => {
    try {
        console.log("Fetching recipes for user:", req.user.userId);
        
        const recipes = await Recipe.find({ userId: req.user.userId }); 
        res.json(recipes);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ message: error.message });
    }
});

router.post('/save', authenticateToken, async (req, res) => {
    try {
        const { title, image, description, difficulty, cookingTime, rating } = req.body;

        console.log("Saving recipe for user:", req.user.userId);

        const newRecipe = new Recipe({
            userId: req.user.userId, 
            title,
            image,
            description,
            difficulty,
            cookingTime,
            rating,
        });

        await newRecipe.save();
        res.json({ message: 'Recipe saved successfully!', recipe: newRecipe });
    } catch (error) {
        console.error("Error saving recipe:", error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
