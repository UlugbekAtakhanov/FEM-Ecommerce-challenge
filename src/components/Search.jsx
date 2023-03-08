import React, { useContext, useRef } from 'react'
import { ProductsContext } from '../App'
import { searchingProducts } from '../utils/fetchData'

const Search = () => {
    const searchRef = useRef()
    const [, dispatch] = useContext(ProductsContext)
    const searchHandler = () => {
        searchingProducts(dispatch, searchRef.current.value)
    }
    return (
        <div className='bg-white rounded-md overflow-hidden ml-32'>
            <input ref={searchRef} className='pl-4 w-[500px] outline-none text-[14px] placeholder:text-black' type="text" placeholder='Search product...' />
            <button onClick={searchHandler} className='bg-black py-3 px-8 text-white'>Search</button>
        </div>
    )
}

export default Search