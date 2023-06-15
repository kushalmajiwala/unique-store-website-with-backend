import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { useState } from 'react';

const Nav = () => {

    const [navVisibility, setNavVisibility] = useState('hidden');
    const [showMenuBtn, setShowMenuBtn] = useState('');

    const updateNavVisibility = () => {
        if(navVisibility === 'hidden')
        {
            setNavVisibility('');
            setShowMenuBtn('hidden');
        }
        else
        {
            setNavVisibility('hidden');
            setShowMenuBtn('');
        }
    }

    return (
        <>
            <div className=''>
                <ul className='hidden md:flex justify-between items-center pr-4'>
                    <li className='p-3 mt-2'>
                        <NavLink to='/' className='no-underline text-black'>HOME</NavLink>
                    </li>
                    <li className='p-3 mt-2'>
                        <NavLink to='/about' className='no-underline text-black'>ABOUT</NavLink>
                    </li>
                    <li className='p-3 mt-2'>
                        <NavLink to='/products' className='no-underline text-black'>PRODUCTS</NavLink>
                    </li>
                    <li className='p-3 mt-2'>
                        <NavLink to='/contact' className='no-underline text-black'>CONTACT</NavLink>
                    </li>
                    <li className='p-3 mt-2'>
                        <Button label='LOGIN' />
                    </li>
                    <li className='p-3 mt-2'>
                        <i className="bi bi-cart p-overlay-badge text-3xl cursor-pointer">
                            <Badge value="0" severity="danger"></Badge>
                        </i>
                    </li>
                </ul>
                <div className=''>
                    <div className='flex w-screen justify-between items-center h-16 md:w-96 md:h-0'>
                    {/* eslint-disable-next-line */}
                        <img src='https://ivabqohtumjadxnipnsa.supabase.co/storage/v1/object/public/images/unique_logo.jpg' className='w-42 h-20 rounded-3xl mt-4 p-2 md:hidden' alt='no-image'></img>
                        <i className={`bi bi-list cursor-pointer text-4xl mr-3 mt-3 ${showMenuBtn} md:hidden`} onClick={updateNavVisibility}></i>
                        <i className={`bi bi-x cursor-pointer text-5xl mr-3 mt-3 ${navVisibility} md:hidden`} onClick={updateNavVisibility}></i>
                    </div>
                    <div className='inline-block md:flex text-center'>
                        <ul className={`${navVisibility} md:hidden pr-4 text-center text-2xl w-screen h-screen`}>
                            <li className='p-3 mt-2'>
                                <NavLink to='/' className='no-underline text-black' onClick={updateNavVisibility}>HOME</NavLink>
                            </li>
                            <li className='p-3 mt-2'>
                                <NavLink to='/about' className='no-underline text-black' onClick={updateNavVisibility}>ABOUT</NavLink>
                            </li>
                            <li className='p-3 mt-2'>
                                <NavLink to='/products' className='no-underline text-black' onClick={updateNavVisibility}>PRODUCTS</NavLink>
                            </li>
                            <li className='p-3 mt-2'>
                                <NavLink to='/contact' className='no-underline text-black' onClick={updateNavVisibility}>CONTACT</NavLink>
                            </li>
                            <li className='p-3 mt-2'>
                                <Button label='LOGIN' onClick={updateNavVisibility}/>
                            </li>
                            <li className='p-3 mt-2'>
                                <i className="bi bi-cart p-overlay-badge text-3xl cursor-pointer" onClick={updateNavVisibility}>
                                    <Badge value="0" severity="danger"></Badge>
                                </i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav