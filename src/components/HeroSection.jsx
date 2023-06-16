import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = ({ myData }) => {

    const { name, image_url } = myData;

    return (
        <>
            <div className='flex justify-center pt-16 mb-5 md:mb-0'>
                <div className='inline-block md:flex md:justify-between md:w-2/3'>
                    <div className='w-96 -mt-8 md:mt-2 mb-5'>
                        <p className='pl-5 text-purple-600'>welcome to</p>
                        <p className='pl-5 text-4xl -mt-5'>{ name }</p>
                        <p className='text-justify pl-5 pr-5'>This is our Unique Store Website where people can LOGIN
                            and purchase any products which are listed on our Website
                            All the products prices are affordable for the middle class
                            people.
                        </p>
                        <NavLink to='/products' className='no-underline text-white bg-blue-500 rounded-md py-2 px-4 ml-5'>SHOP NOW</NavLink>
                    </div>
                    <div className='ml-5 pr-5'>
                        {/* eslint-disable-next-line */}
                        <img className='w-auto h-64 rounded-xl' src={image_url} alt='no-image' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection