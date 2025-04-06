const Product = require('../../models/productModel');

const insertProduct = async (productData) => {
    const { name, description, price, stock, category, image } = productData;
    const newProduct = new Product({ name, description, price, stock, category, image });
    await newProduct.save();
    return { message: 'Product added successfully' };
};

const getAllProduct = async () => {
    const product = await Product.find({});
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

const getProductByID = async (id) => {
    const product = await Product.findById(id);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

const updateProduct = async (id, updatedData) => {
    const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });
    if (!product) {
        throw new Error('Product not found or update failed');
    }
    return { message: 'Product updated successfully', product };
};

const deleteProduct = async (id) => {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        throw new Error('Product not found or deletion failed');
    }
    return { message: 'Product deleted successfully' };
};

module.exports = {
    insertProduct,
    getAllProduct,
    getProductByID,
    updateProduct,
    deleteProduct
};
