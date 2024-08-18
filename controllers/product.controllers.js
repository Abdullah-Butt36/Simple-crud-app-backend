const product = require('../models/prodcts.models.js')

const getProducts = async (req , res) => {
    try{
        const product1 = await product.find({})
        res.status(200).json(product1)
    }
    catch(error){
        res.status(500)
        .json({message : error.message})
    }
}


const getproduct = async(req, res) => {
        try{
           const {id} = req.params;
           const product2 = await product.findById(id);
           res.status(200).json(product2)
        }
        catch(error){
            res.status(500)
            .json({message : error.message})
        }
}

const createProduct = async (req,res) => {
    try{
        const product3 = await product.create(req.body);
        res.status(200).json(product3)
     }
     catch(error){
         res.status(500)
         .json({message : error.message})
     }
}

const updateProduct = async (req , res) => {
    try{
        const {id} = req.params;
        const product4 = await product.findByIdAndUpdate(id , req.body);
 
        if(!product4){
       return res.status(404).json({message : "Product not Found"})
        }
       const updatedProduct = await product.findById(id) 
       res.status(200).json(updatedProduct)
     }
     catch(error){
         res.status(500)
         .json({message : error.message})
     }
}

const deleteProduct = async (req , res) => {
    try{
        const {id} = req.params;
        const deleteProduct = await product.findByIdAndDelete(id);
        if(!deleteProduct){
            return res.status(404).json({message : "Product not found"});
        }
        res.status(200).json({message : "Product Deleted Successfully"})
    } catch(error){
        res.status(400).json({message : error.message})
    }
}
module.exports = {
    getProducts,
    getproduct,
    createProduct,
    updateProduct,
    deleteProduct
}