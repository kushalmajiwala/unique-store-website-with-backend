import React from 'react'
import { useFilterContext } from '../context/filtercontext'

const FilterSection = () => {

  const { filters: { text }, all_products, updateFilterValue, active_category } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");

  return (
    <>
      <div className='flex justify-start'>
        <div>
          <div className='pt-4'>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" name="text" value={text} placeholder="SEARCH" onChange={updateFilterValue} className="border-2 border-black py-1 px-2 mt-1" />
            </form>
          </div>
        </div>
      </div>
      <div className='flex justify-start mt-5'>
        <div>
          <h4>Category</h4>
          <div className='grid grid-cols-1 text-left'>
            {
              categoryOnlyData.map((currElem, index) => {
                return <button key={index} name="category" value={currElem} onClick={updateFilterValue} className={active_category === currElem ? "text-left mt-2 text-lg text-blue-700 hover:text-blue-700 underline" : "text-left mt-2 text-lg text-gray-700 hover:text-blue-700"}>{currElem}</button>
              })
            }
          </div>
        </div>
      </div>
      <div className='flex justify-start mt-5'>
        <div>
          <h4>Company</h4>
          <div className='pt-2'>
            <select name='company' id='company' className='px-2 py-1 border-2 border-gray-500' onClick={updateFilterValue}>
              {
                companyOnlyData.map((currElem, index) => {
                  return <option key={index} name="company" value={currElem}>{currElem}</option>
                })
              }
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterSection