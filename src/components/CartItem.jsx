import React from 'react'
import { useCartContext } from '../context/cart_context'
import FormatPrice from '../helpers/FormatPrice'
import CartAmountToggle from './CartAmountToggle'

const CartItem = ({ id, name, image, color, price, amount }) => {

    const { removeItem, setDecrease, setIncrease } = useCartContext();
    
    return (
        <>
            <div className='flex pt-4 w-full'>
                <div className='md:flex w-1/3 md:w-1/5 md:justify-start'>
                    <div className='md:flex md:justify-start'>
                        <div className='flex justify-center'>
                            <figure>
                                <img src={image} alt={id} className="w-10 h-8 md:w-14 md:h-10" />
                            </figure>
                        </div>
                        <div className='ml-6 md:mt-1'>
                            <p className=' text-gray-600 text-sm -mt-1'>{name}</p>
                            <div className='flex -mt-4 md:-mt-4'>
                                <p className=' text-gray-600 text-sm'>Color:</p>
                                <button className='w-5 h-5 rounded-full ml-2' style={{ backgroundColor: color }}></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block w-1/3 md:w-1/5'>
                    <div className='text-center mt-2'>
                        <FormatPrice price={price} />
                    </div>
                </div>
                <div className='flex justify-center w-1/3  md:w-1/5'>
                    <div className='flex justify-center'>
                        <CartAmountToggle amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />
                    </div>
                </div>
                <div className='hidden md:block w-1/3 md:w-1/5'>
                    <div className='text-center mt-2'>
                        <FormatPrice price={price * amount} />
                    </div>
                </div>
                <div className='flex justify-center w-1/3 md:w-1/5'>
                    <div className='mt-1'>
                        <i className="bi bi-trash-fill text-red-500 hover:text-red-700 text-xl cursor-pointer" onClick={() => removeItem(id)}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem