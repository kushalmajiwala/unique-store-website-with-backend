import React from 'react'
import { NavLink } from 'react-router-dom'

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
    return (
        <>
            <div>
                <div className='flex justify-between w-1/4'>
                    <button onClick={() => setDecrease()}><i className="bi bi-dash text-3xl"></i></button>
                    <div className='text-3xl text-purple-400'>{amount}</div>
                    <button onClick={() => setIncrease()}><i className="bi bi-plus text-3xl"></i></button>
                </div>
                <div className='mt-3'>
                    <NavLink to='/contact' className='no-underline text-white bg-blue-500 rounded-md py-2 px-4'>ADD TO CART</NavLink>
                </div>
            </div>
        </>
    )
}

export default CartAmountToggle