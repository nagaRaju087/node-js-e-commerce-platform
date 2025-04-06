const productService = require('./productService');

exports.insertProduct = async (req, res) => {
    try {
        const response = await productService.insertProduct(req.body);
        res.status(201).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getAllProduct = async (req, res) => {
    try {
        const Product = await productService.getAllProduct();
        res.json(Product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.getProductById=async(req,res)=>{
    try{
        const product = await productService.getProductByID(req.params.id);
        res.json(product)
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await productService.updateProduct(req.params.id, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const result = await productService.deleteProduct(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};