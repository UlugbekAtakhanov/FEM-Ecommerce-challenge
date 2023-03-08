import React from 'react'
import { Link } from "react-router-dom"
import { Bars3Icon, ChevronDownIcon, } from '@heroicons/react/24/solid'


const Navbar = () => {
    return (
        <div className='py-4 flex items-center justify-between main-container'>
            <Link to="/">
                <h1 className='text-3xl font-semibold'><span className='text-red-500'>React</span>Cart</h1>
            </Link>
            <ul className='flex items-center ml-20 gap-6'>
                <li className='py-4 group relative'>
                    <div className='flex gap-2 items-center group:'>
                        Home
                        <ChevronDownIcon className='w-4 group-hover:-rotate-180 transition-all' />
                    </div>
                    <ul className='absolute top-full z-20 whitespace-nowrap invisible translate-y-4 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 transition-all bg-white rounded shadow p-4 pr-10'>
                        <li><a className='hover:text-red-500' href="#">Home page 1</a></li>
                        <li><a className='hover:text-red-500' href="#">Home page 2</a></li>
                        <li><a className='hover:text-red-500' href="#">Home page 3</a></li>
                    </ul>
                </li>
                <li className='py-4'><a className='hover:text-red-500' href="#">Shop</a></li>
                <li className='py-4'><a className='hover:text-red-500' href="#">Pages</a></li>
                <li className='py-4'><a className='hover:text-red-500' href="#">Contact</a></li>
            </ul>
            <ul className='flex items-center ml-auto gap-6 text-[13px] font-[600]'>
                <li className='py-4'>
                    <a className='hover:text-red-500' href="#">Login</a>/
                    <a className='hover:text-red-500' href="#">Register</a>
                </li>
                <li className='py-4'><a className='hover:text-red-500' href="#">Language</a></li>
                <li className='py-4'><a className='hover:text-red-500' href="#">Currency</a></li>
            </ul>
        </div>
    )
}

export default Navbar