const Product = require("../models/product.model");

exports.addProduct = async (req, res) => {
    try {

        const data = req.body;
        // console.log(data);
        const newData = await new Product(data).save();
        res.status(201).json({
            success: true,
            message: newData
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}