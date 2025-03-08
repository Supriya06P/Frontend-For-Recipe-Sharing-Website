const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    cookingTime: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Recipe', RecipeSchema); 