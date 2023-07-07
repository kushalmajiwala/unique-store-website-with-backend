import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import supabase from "../helpers/supabase_setup";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const { isAuthenticated, loginWithRedirect, user } = useAuth0();

    const getAllCartData = async () => {
        if (isAuthenticated) {
            let { data } = await supabase.from('cart').select("*").eq("email", user.email);
            console.log(data);
            if (data) {
                let ptotal = 0;
                let titem = 0;
                data.map((curElem) => {
                    ptotal = ptotal + curElem.price * curElem.amount
                    titem = titem + curElem.amount
                })
                setState({ ...state, cart: data, total_item: titem, total_price: ptotal });
            }
        }
    }

    const initialState = {
        cart: [],
        total_item: 0,
        total_price: 0,
        shipping_fees: 50000
    };

    const [state, setState] = useState(initialState);

    const addToCart = async (id, color, amount, product) => {
        if (isAuthenticated) {
            const insert_data = {
                id: id + color,
                email: user.email,
                amount: amount,
                color: color,
                image: product.image[0].url,
                max: product.stock,
                name: product.name,
                price: product.price
            }
            const { error } = await supabase
                .from('cart')
                .insert(insert_data)
                .select()
            if (error) console.log(error);
            getAllCartData();
        }
    }
    const removeItem = async (id) => {
        const { error } = await supabase
            .from('cart')
            .delete()
            .eq('id', id);
        if (error) console.log(error);
        getAllCartData();
    }
    const clearCart = async () => {
        const { error } = await supabase
            .from('cart')
            .delete()
            .eq("email", user.email);
        if (error) console.log(error);
        getAllCartData();
    }

    const setIncrease = async (id, amount, max) => {
        if (amount < max) {
            const { error } = await supabase
                .from('cart')
                .update({ amount: amount + 1 })
                .eq('id', id);
            if (error) console.log(error);
            getAllCartData();
        }
    }
    const setDecrease = async (id, amount) => {
        if (amount > 1) {
            const { error } = await supabase
                .from('cart')
                .update({ amount: amount - 1 })
                .eq('id', id);
            if (error) console.log(error);
            getAllCartData();
        }
    }

    useEffect(() => {
        getAllCartData();
    }, [isAuthenticated]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }; 