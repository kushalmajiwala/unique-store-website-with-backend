import React from 'react'
import { useState } from 'react';
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    return (
        <>
            <div>
                <div className='flex'>
                    <p>Colors:</p>
                    <div className='flex'>
                        {
                            colors.map((curColor, index) => {
                                return (
                                    <button key={index} className='cursor-pointer w-7 h-7 rounded-full ml-2 hover:opacity-60' onClick={() => setColor(colors[index])} style={{ backgroundColor: curColor }}>
                                        {color === curColor ? <i className="bi bi-check text-white"></i> : null}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div>
                <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
            </div>
        </>
    )
}

export default AddToCart