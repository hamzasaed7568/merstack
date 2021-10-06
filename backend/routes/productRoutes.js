import express from "express";
const router = express.Router();
import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler";
import {getProductById,getProducts} from "../Controller/productController.js"

// router.get("/",asyncHandler(async (req,res)=>{
//     const products = await Product.find({});
//     res.json(products); 
//   })
// );

router.route("/").get(getProducts)
 
// router.get("/:id",asyncHandler(async (req,res)=>{
//   const product =await Product.findById(req.params.id);
//     if(product)
//     {
//         res.json(product);
//     }
//     else
//     {
//         res.status(404)
//         throw new Error("product not found");
//     }
    // console.log(product ,"product is");
    // console.log("res in dynamic routing is:"  , req.params.id);
// })
// );

router.route("/:id").get(getProductById)

export default router;