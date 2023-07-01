import React from 'react'
import { useCartContext } from '../context/cart_context'
import CartItem from './CartItem';

const Cart = () => {
    const { cart } = useCartContext();
    console.log(cart);
    return (
        <>
            <div className='flex justify-center'>
                <div className='w-full md:w-3/4'>
                    <div className='flex justify-around pt-5 border-b-2 w-full'>
                        <p className='px-3 text-sm text-gray-600 w-1/3 md:w-1/5 text-center'>ITEM</p>
                        <p className='px-3 text-sm text-gray-600 w-1/3 md:w-1/5 text-center hidden md:block'>PRICE</p>
                        <p className='px-3 text-sm text-gray-600 w-1/3 md:w-1/5 text-center'>QUANTITY</p>
                        <p className='px-3 text-sm text-gray-600 w-1/3 md:w-1/5 text-center hidden md:block'>SUBTOTAL</p>
                        <p className='px-3 text-sm text-gray-600 w-1/3 md:w-1/5 text-center'>REMOVE</p>
                    </div>
                    <div>
                        {
                            cart.map((currElem) => {
                                return <CartItem key={currElem.id} {...currElem} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart