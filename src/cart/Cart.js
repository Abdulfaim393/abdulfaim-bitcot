import React, { createContext, useEffect, useReducer } from 'react'
import '../cart/cart.css'
import { products } from './products';
import ContextCart from './ContextCart';
import { reducer } from './reducer'

export const CartContex = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
};

const Cart = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // to delete indv element from an item cart 
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });

    };

    // clear cart 
    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" });
    };

    // increment item
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    //decrement item
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };

    // const [item, setItem] = useState(products);

    //we will use useEffect to update data
    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
        console.log("whatsup");
    },[state.item]);

    return (
        <>
            <CartContex.Provider value={{ ...state, removeItem, clearCart, increment, decrement }} >
                <ContextCart />
            </CartContex.Provider>
        </>
    )
}

export default Cart
