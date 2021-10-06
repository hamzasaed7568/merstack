import axios from "axios";
import {CART_ADD_ITEM,CART_CLEAR_ITEMS,CART_REMOVE_ITEM} from "../constants/cartConstant"

export const addToCart = (id,qty) => async (dispatch,getState)=>{
    try {
        const {data} =await axios.get(`http://localhost:5000/api/products/${id}`)

    console.log(data , "data in recieved in action");
    console.log(qty , "id and qty");
    dispatch(
        {
            type:CART_ADD_ITEM,
            payload:{
                product:data._id,
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock,
                qty
            }
        })
        // console.log(getState(), "get state is");
    localStorage.setItem("cartItems",JSON.stringify(getState.cart.cartItems))
    
    } catch (error) {
        console.log(error);    
    }
}

export const removeFromCart = (id) => (dispatch , getState) =>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem("cartItems" , JSON.stringify(getState.cart.cartItems))
}