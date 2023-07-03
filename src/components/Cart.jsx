import React from 'react'
import { useCartContext } from '../context/cart_context'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
    const { cart, total_item, clearCart, total_price, shipping_fees } = useCartContext();
    const { isAuthenticated} = useAuth0();

    if (total_item === 0 || isAuthenticated === false) {
        return (
            <div className='flex justify-center'>
                <div className='pt-14 pb-2'>
                    <figure className='flex justify-center'>
                        {/* eslint-disable-next-line */}
                        <img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/empty_cart.png' alt='no-image' className=' w-36 h-36' />
                    </figure>
                    <p className=' text-gray-600 text-xl font-bold'>Your Cart Is Currently Empty!</p>
                    <div className='flex justify-center pt-2'>
                        <NavLink to="/products">
                            <button className='px-3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm'>SHOP NOW</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }

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
                    <div className='border-b-2 pb-3 pt-2'>
                        {
                            cart.map((currElem) => {
                                return <CartItem key={currElem.id} {...currElem} />
                            })
                        }
                    </div>
                    <div className='w-full flex justify-between mt-3 px-2'>
                        <NavLink to="/products">
                            <button className='px-3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm'>CONTINUE SHOPPING</button>
                        </NavLink>
                        <button className='px-3 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-sm' onClick={clearCart}>CLEAR CART</button>
                    </div>
                    <div className='mt-4 px-2 flex justify-end items-center'>
                        <div className='bg-gray-100 shadow-md px-4 py-3'>
                            <div className='flex mt-3'>
                                <p className='w-32'>Subtotal:</p>
                                <p className='font-bold w-24 text-right'>
                                    <FormatPrice price={total_price} />
                                </p>
                            </div>
                            <div className='flex border-b-2 border-gray-300 pb-1'>
                                <p className='w-32'>Shipping Fee:</p>
                                <p className='font-bold w-24 text-right'>
                                    <FormatPrice price={shipping_fees} />
                                </p>
                            </div>
                            <div className='flex'>
                                <p className='w-32 mt-3'>Order Total:</p>
                                <p className='mt-3 font-bold w-24 text-right'>
                                    <FormatPrice price={shipping_fees + total_price} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart