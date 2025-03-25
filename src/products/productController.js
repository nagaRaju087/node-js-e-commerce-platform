const productService = require('./productService');

exports.registerProduct = async (req, res) => {
    try {
        const response = await productService.registerProduct(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.loginProduct = async (req, res) => {
    try {
        const response = await productService.loginProduct(req.body);
        res.json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getProductProfile = async (req, res) => {
    try {
        const Product = await productService.getProductProfile(req.Product.ProductId);
        res.json(Product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
