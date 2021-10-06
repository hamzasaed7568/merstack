import asynHandler  from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asynHandler(async(req,res)=>{
    const products = await Product.find({});
    console.log(products);
    res.json(products)
    
})

const getProductById = asynHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(product)
    {
        res.json(product)
    }
    else
    {
        res.status(404);
        throw new Error("product not found")
    }
})

export {getProducts , getProductById}