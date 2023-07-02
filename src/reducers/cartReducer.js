
const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        let existingProduct = state.cart.find((curItem) => {
            return curItem.id === id + color
        });

        if (existingProduct) {
            let updatedProduct = state.cart.map((curItem) => {
                if (curItem.id === id + color) {
                    let newAmount = curItem.amount + amount;
                    
                    if(newAmount >= curItem.max)
                    {
                        newAmount = curItem.max;
                    }

                    return {
                        ...curItem,
                        amount: newAmount
                    }
                }
                else {
                    return {
                        ...curItem,
                    }
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }
        }
        else {
            let cartProduct;
            cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock
            };
            return {
                ...state,
                cart: [...state.cart, cartProduct],
                total_item: state.total_item + 1
            }
        }
    }
    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((currItem) => {
            return currItem.id !== action.payload;
        })
        return {
            ...state,
            cart: updatedCart,
            total_item: state.total_item - 1
        }
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
            total_item: 0
        }
    }
    return state;
}

export default cartReducer