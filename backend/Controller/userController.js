import asyncHandler from "express-async-handler";
import User from "../models/userModel.js"


const authUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email})
    console.log(user);
    // const user = await User.findOne({ email });

//   if (user && (await user.comparePassword(password))) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: null,
//     });
//   }

    if(user && (await user.matchPassword(password))){
        res.json({
            id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:null
        })
    }
    else
    {
        res.status(401)
        throw new Error("invalid email or password")
    }
})

const getUserProfile = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id);
    res.send("success")
})

export {authUser , getUserProfile}