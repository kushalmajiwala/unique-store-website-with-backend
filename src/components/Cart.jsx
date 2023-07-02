import React from 'react'
import { useCartContext } from '../context/cart_context'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom'

const Cart = () => {
    const { cart, total_item, clearCart } = useCartContext();

    if (total_item === 0) {
        return (
            <div className='flex justify-center'>
                <div className='pt-14 pb-2'>
                    <figure className='flex justify-center'>
                        {/* eslint-disable-next-line */}
                        <img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/empty_cart.png' alt='no-image' className=' w-36 h-36' />
                    </figure>
                    <p className=' text-gray-600 text-xl font-bold'>Your Cart Is Currently Empty!</p>
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
                    <div className='w-full flex justify-between mt-3'>
                        <NavLink to="/products">                       
                             <button className='px-3 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm'>CONTINUE SHOPPING</button>
                        </NavLink>
                        <button className='px-3 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-sm' onClick={clearCart}>CLEAR CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart