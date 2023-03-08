import React, { useContext, useEffect } from 'react'
import { Bars3Icon, } from '@heroicons/react/24/solid'
import { HeartIcon, ShoppingCartIcon, UserIcon, HomeIcon } from '@heroicons/react/24/outline'
import Search from './Search'
import { getFromLocalStorage } from '../utils/fetchFromLS'
import { ProductsContext } from '../App'
import { Link } from 'react-router-dom'

const SearchBar = () => {
    const [state, dispatch] = useContext(ProductsContext)

    useEffect(() => {
        const cartList = getFromLocalStorage("cart") || []
        const wishlist = getFromLocalStorage("wishlist") || []
        dispatch({ type: "GET_ALL_DATA_FROM_LS", payload: { cartList, wishlist } })
    }, [])


    return (
        <div className='bg-cred p-3 sticky -top-[1px] z-10 border-none'>
            <div className="main-container flex items-center">

                {/* categories */}
                <div className='relative bg-black w-max rounded-md cursor-pointer group' >
                    <div className=' flex gap-2 items-center w-[200px] py-3 justify-center text-white'>
                        <Bars3Icon className='w-5' />
                        <p>All categories</p>
                    </div>
                    <ul className='absolute top-[125%] z-10 translate-y-2 invisible opacity-0 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 transition-all bg-white divide-y w-full shadow'>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                        <li><a className='p-4 hover:text-red-500 flex items-end gap-2 leading-4' href="#"><HomeIcon className='w-5 text-pink-400' /> links</a></li>
                    </ul>
                </div>

                {/* search */}
                <Search />

                {/* icons */}
                <div className='ml-auto flex gap-6 items-center'>
                    <Link to="/wishlist" className='text-white flex flex-col items-center relative text-[12px] cursor-pointer'>
                        <HeartIcon className='w-7' />
                        <span className='bg-black w-4 h-4  flex items-center justify-center rounded-full absolute top-0 right-0'>{state.wishlist.length}</span>
                        <p className=''>Wish list</p>
                    </Link>
                    <Link to="/cart" className='text-white flex flex-col items-center relative text-[12px] cursor-pointer'>
                        <ShoppingCartIcon className='w-7' />
                        <span className='bg-black w-4 h-4  flex items-center justify-center rounded-full absolute top-0 right-0'>{state.cart.length}</span>
                        <p className=''>Cart</p>
                    </Link>
                    <div className='text-white flex flex-col items-center relative text-[12px] cursor-pointer'>
                        <UserIcon className='w-7' />
                        <p className=''>Account</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SearchBar