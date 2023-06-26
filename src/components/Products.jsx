import React from 'react'
import ProductList from './ProductList'
import Sort from './Sort'
import FilterSection from './FilterSection'

const Products = () => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex w-5/6'>
                    <div className='w-2/6'>
                        <FilterSection />
                    </div>
                    <div className=' flex justify-center w-full '>
                        <div>
                            <Sort />
                        </div>
                        <div className='w-full'>
                            <ProductList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products