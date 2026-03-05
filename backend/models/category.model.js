const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'category name is required !!!'],
        unique: true
    },

    note:{
        type: String,
        required: false
    }

},{timestamps: true})

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;