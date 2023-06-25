import React from 'react'
import { useState } from 'react';

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);

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
        </>
    )
}

export default AddToCart