import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React, { useContext } from 'react'
import { ProductsContext } from '../App'

const IsChecked = ({ productId }) => {
    const [{ cart, wishlist }] = useContext(ProductsContext)
    const isInCart = cart.find(item => item.id === productId)
    const isInWishlist = wishlist.find(item => item.id === productId)
    return (
        <div className='absolute right-4 bottom-4 flex gap-1'>
            {isInCart && <ShoppingCartIcon className='w-5 fill-green-500 stroke-none' />}
            {isInWishlist && <HeartIcon className='w-5 fill-cred stroke-none' />}
        </div>
    )
}

export default IsChecked