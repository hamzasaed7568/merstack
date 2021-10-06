import {CART_ADD_ITEM , CART_CLEAR_ITEMS, CART_REMOVE_ITEM} from "../constants/cartConstant"

export const cartReducer = (state= { cartItems:[] } , action)=>{
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            console.log("item recieved inpayload", item);
            const existItem = state.cartItems.find(x => x.product === item.product)
            console.log("existing item",existItem);
            if(existItem)
            {
                return{
                    ...state , 
                    cartItems: state.cartItems.map(x=>
                        x.product === existItem.product ?  item : x
                    )
                }
            }
            else
            {
                return{
                    ...state,cartItems:[...state.cartItems,item] 
                }
            }
        case CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:state.cartItems.filter((x)=> x.product !== action.payload)
            }
        default:
            return state;
    }
}