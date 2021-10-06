// const express = require("express");
import express from "express"
// const products = require("./data/products");
// import products from "./data/products.js";
// const cors = require('cors');
import cors from "cors"
// const dotenv = require("dotenv");
import dotenv from "dotenv"
import color from "colors"
import productRoutes from "./routes/productRoutes.js"
import {notFound , errorHandler} from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoute.js"

import connectDB from "./confiq/db.js";
connectDB();

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/products",productRoutes)
app.use("/api/users",userRoutes)
app.use(notFound);
app.use(errorHandler);

// app.get("/",(req,res)=>{
//   res.send("apii data")
// })


// app.get("/api/products",(req,res)=>{
    // console.log("request" , req.body);
    // res.json(products);
    // console.log("product is: ", products);
// })

// app.get("/api/products/:id",(req,res)=>{
//     const product = products.find((p)=>  p._id === req.params.id);
//     res.json(product);
//     console.log(product ,"product is");
//     console.log("res in dynamic routing is:"  , req.params.id);
// })

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log( `Server is running in ${process.env.NODE_ENV} made on port ${PORT}`.yellow.bold);
})