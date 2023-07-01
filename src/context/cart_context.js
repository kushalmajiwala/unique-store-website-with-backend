import { createContext, useContext, useReducer } from "react";
import reducer from '../reducers/cartReducer';

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: 0,
    total_amount: "",
    shipping_fees: 50000
};

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }

    const getTotalCartItem = () => {
        return state.total_item;
    }

    return (
        <CartContext.Provider value={{ ...state, addToCart, getTotalCartItem }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }; 