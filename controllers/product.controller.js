import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
     try {
            const all_products = await Product.find({})
            res.status(200).json(all_products);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
};


export const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


export const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            res.status(404).json({message: "Product not found!"});
        }

        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            res.status(404).json({message: "Product not found!"});
        }

        res.status(200).json({product, message: "Deleted successfully"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};



