import React from 'react'
import { useFilterContext } from '../context/filtercontext'

const FilterSection = () => {

  const { filters: { text }, updateFilterValue } = useFilterContext();

  return (
    <>
      <div className='flex justify-start'>
        <div>
          <div className='pt-4'>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="text" value={text} placeholder="search" onChange={updateFilterValue} className="border-2 border-black py-1 px-2 mt-1"/>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterSection