import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../reducers/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartItems");
    if(localCartData === [])
    {
        return [];
    }
    else
    {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalCartData(),
    total_item: getLocalCartData().length,
    total_amount: "",
    shipping_fees: 50000
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }; 