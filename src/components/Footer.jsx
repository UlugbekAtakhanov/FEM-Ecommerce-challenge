import React from 'react'
import { Link } from 'react-router-dom'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Footer = () => {
    return (
        <div className='bg-[#f3f3f3]'>
            <div className='main-container py-14 flex justify-between'>

                <div className='w-[400px]'>
                    <Link to="/">
                        <h1 className='text-3xl font-semibold'><span className='text-red-500'>React</span>Cart</h1>
                    </Link>
                    <p className='text-[15px] py-4'>Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic or web designs the passage</p>
                    <h3 className='text-[18px] text-black mb-2 font-semibold'>NEWSLETTER</h3>
                    <div className='rounded-md mr-2 overflow-hidden flex'>
                        <input className='bg-transparent pl-2 border rounded-l-md border-gray-300 text-sm flex-1' type="text" placeholder='Your email address' />
                        <button className='bg-cred text-white py-2 px-4'>SUBSCRIBE</button>
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <h3 className='text-[18px] text-black mb-2 font-semibold'>MY ACCOUNT</h3>
                    <a className='hover:text-red-500' href="#">Orders</a>
                    <a className='hover:text-red-500' href="#">Wishlist</a>
                    <a className='hover:text-red-500' href="#">Track Order</a>
                    <a className='hover:text-red-500' href="#">Manage Account</a>
                    <a className='hover:text-red-500' href="#">Return Order</a>
                </div>

                <div className='flex flex-col justify-between'>
                    <h3 className='text-[18px] text-black mb-2 font-semibold'>INFORMATION</h3>
                    <a className='hover:text-red-500' href="#">About us</a>
                    <a className='hover:text-red-500' href="#">Return Policy</a>
                    <a className='hover:text-red-500' href="#">Terms & condition</a>
                    <a className='hover:text-red-500' href="#">Privacy Policy</a>
                    <a className='hover:text-red-500' href="#">FAQ</a>
                </div>

                <div className='flex flex-col justify-between w-[400px]'>
                    <h3 className='text-[18px] text-black mb-2 font-semibold'>CONTACT</h3>
                    <a className='flex gap-2 items-start' href="#"><MapPinIcon className='w-5 translate-y-[2px]' /> 7895 Dr New Albuquerue, NM 19800, United States Of America</a>
                    <a className='flex gap-2 items-start' href="#"><PhoneIcon className='w-5 translate-y-[2px]' />+566 477 256, +566 254 575</a>
                    <a className='flex gap-2 items-start' href="#"><EnvelopeIcon className='w-5 translate-y-[2px]' />info@domain.com</a>
                </div>

            </div>
        </div>
    )
}

export default Footer