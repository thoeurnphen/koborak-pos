const mongoose  = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name is required !!!']
    },
    
    categoryId: {
        type: mongoose.Types.ObjectId,
        required: [true, 'categoryId is required !!!'],
        ref: 'Category'
    },

    proCode:{
        type: String,
        required: [true, 'code is required !!!'],
        unique: true
    },

    imageUrl: {
        type: String,
        required: false
    },

    costPrice: {
        type: Number,
        required: [true, 'cost prrice is rquired']
    },

    salePrice: {
        type: Number,
        required: [true, 'cost prrice is rquired']
    },

    stockQty: {
        type: Number,
        required: [true, 'stockQty is required !!!']
    },

    description: {
        type: String,
        required: false
    }

},{timestamps: true})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;