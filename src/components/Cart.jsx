import React, { useEffect, useState } from 'react'
import { useCartContext } from '../context/cart_context'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom'
import FormatPrice from '../helpers/FormatPrice';
import { useAuth0 } from "@auth0/auth0-react";
import { Dialog } from 'primereact/dialog';
import { RadioButton } from 'primereact/radiobutton';

const Cart = () => {
    const { cart, total_item, clearCart, total_price, shipping_fees, addUserDetails, addr, pay_method, getUserDetails } = useCartContext();
    const { isAuthenticated, user } = useAuth0();
    const [visible, setVisible] = useState(false);
    const [payment_method, setPayment_method] = useState("cash");
    const [address, setAddress] = useState("");
    const [details, setDetails] = useState(false);

    const saveDetails = () => {
        addUserDetails(user.email, address, payment_method);
        setDetails(true);
    }

    const openDetailsDialog = () => {
        console.log(addr);
        console.log(pay_method);
        setAddress(addr);
        setPayment_method(pay_method);
        setVisible(true);
    }

    useEffect(() => {
        getUserDetails();
        // setAddress(addr);
        // setPayment_method(pay_method);
    }, [visible])

    const footerContent = (
        <div className='flex justify-between h-16 items-center'>
            <div className='pt-4'>
                <button className='md:font-medium text-white whitespace-nowrap px-3 py-2 bg-green-600 hover:bg-green-500' onClick={() => saveDetails()}>SAVE DETAILS</button>
            </div>
            <div className='text-right pt-4 flex'>
                <button className={payment_method === "cash" ? `md:font-medium whitespace-nowrap text-white px-3 md:px-3 py-2 bg-blue-600 hover:bg-blue-500` : `hidden`}>PLACE ORDER</button>
                <button className={payment_method === "online" ? `md:font-medium whitespace-nowrap text-white px-3 md:px-3 py-2 bg-blue-600 hover:bg-blue-500` : `hidden`}>PAY NOW</button>
                <button className='md:font-medium text-white hidden md:block px-3 py-2 bg-red-600 whitespace-nowrap hover:bg-red-500' onClick={() => setVisible(false)}>CLOSE</button>
            </div>
        </div>
    );

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
                            <div className='flex justify-center'>
                                <div className='py-2 px-2 w-full'>
                                    <button className='bg-yellow-300 w-full py-2 font-bold rounded-lg hover:bg-yellow-400 hover:scale-105' onClick={() => openDetailsDialog()}>PROCEED TO BUY</button>
                                </div>
                            </div>
                            <div className="">
                                <Dialog header="CHECKOUT STEPS" draggable={false} visible={visible} onHide={() => setVisible(false)}
                                    className="w-11/12 md:w-2/3" footer={footerContent}>
                                    <div>
                                        <div>
                                            <p className='font-bold text-lg text-orange-500'><span className='mr-3 text-black'>Order Total:</span> <FormatPrice price={total_price + shipping_fees} /></p>
                                        </div>
                                        <p className='font-bold text-lg text-orange-700'>1. Add a Delivery Address</p>
                                        <textarea className='border-2 ml-5 w-5/6 md:w-11/12 h-36 pl-2' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>

                                        <p className='font-bold text-lg text-orange-700 mt-2'>2. Select a Payment Method</p>
                                        <div className='pl-5 md:flex'>
                                            <div>
                                                <RadioButton name="pizza" value="cash" onChange={(e) => setPayment_method(e.value)} checked={payment_method === 'cash'} />
                                                <label htmlFor="ingredient3" className="ml-2">Cash on Delivery</label>
                                            </div>
                                            <div>
                                                <RadioButton name="pizza" value="online" onChange={(e) => setPayment_method(e.value)} checked={payment_method === 'online'} className='md:ml-10' />
                                                <label htmlFor="ingredient3" className="ml-2">Pay Online</label>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog>
                                <Dialog visible={details} draggable={false} className="w-11/12 md:w-1/3" onHide={() => setDetails(false)}>
                                    <div className='flex justify-center'>
                                        <div className='text-center'>
                                            <i className="bi bi-check-circle text-7xl text-green-500"></i>
                                            <p className="font-bold text-lg mt-4">
                                                Details Saved Successfully
                                            </p>
                                        </div>
                                    </div>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart