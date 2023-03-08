import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import React, { useContext, useRef } from 'react'
import { ProductsContext } from '../App'
import { toggleFn } from '../utils/toggleFn'
import IsChecked from './IsChecked'

const ListingItems = ({ grid, list }) => {
    const cartButtonRef = useRef()
    // const el = list.find(item => item.id === cartButtonRef.current.id)
    // console.log(cartButtonRef.current.id)
    // console.log(el)
    const [,dispatch] = useContext(ProductsContext)

    // toggling datas in cart and wishlist
    const toggleHandler = (storage, product) => {
        toggleFn(storage, product, dispatch)
    }

    return (
        <div className={`${grid ? "grid-cols-1" : "grid-cols-4"} grid  gap-8 pb-20 main-container`}>
            {list.length ? list.map(product => (
                <div className={`${grid ? "flex" : ""} gap-4 shadow rounded-md hover:shadow-lg transition-all overflow-hidden relative `} key={product.id}>
                    <div className='relative cursor-pointer group flex-1'>
                        <div className={`${grid ? "hidden" : "block"} absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-2`}>
                            {/* cart */}
                            <div onClick={() => toggleHandler("cart", product)} className='w-10 h-10 rounded-full bg-cred hover:bg-black transition-all flex justify-center items-center text-white p-2'><ShoppingCartIcon className='w-6' /></div>
                            {/* wishlist */}
                            <div onClick={() => toggleHandler("wishlist", product)} className='w-10 h-10 rounded-full bg-cred hover:bg-black transition-all flex justify-center items-center text-white p-2'><HeartIcon className='w-6' /></div>
                        </div>
                        <img className={`${grid ? "w-[300px] h-full" : "w-full"} aspect-square object-cover`} src={product.thumbnail} alt="img" />
                    </div>
                    <div className='p-4 flex flex-col gap-2 flex-[3]'>
                        <h2 className='text-black text-lg font-bold'>{product.title}</h2>
                        <div className=''>
                            <span className='line-through text-cred font-semibold'>${product.price}</span>
                            <span className='text-gray-400 text-xs'>(-{product.discountPercentage}%)</span>
                            <span className='text-green-500 ml-3 font-semibold'>${((100 - parseFloat(product.discountPercentage)) * parseFloat(product.price) / 100).toFixed(2)}</span>
                        </div>
                        <p className={`${grid ? "block" : "hidden"}`}>{product.description}</p>
                        <div className='flex gap-3 items-center'>
                            <img className='w-24' src={`./small-ratings/smallrating-${Math.round(product.rating)}.png`} alt="img" />
                            <span className='text-gray-400'>({product.rating})</span>
                        </div>
                        <div className={`gap-2 mt-4 ${grid ? "flex" : "hidden"}`}>
                            {/* cart */}
                            <button id={product.id} ref={cartButtonRef} onClick={() => toggleHandler("cart", product)} className='cbutton group'><ShoppingCartIcon className='w-6' />Add to cart</button>
                            {/* wishlist */}
                            <button onClick={() => toggleHandler("wishlist", product)} className='cbutton'><HeartIcon className='w-6' />Add to wishlist</button>
                        </div>

                        {/* is checked */}
                        <IsChecked productId={product.id} />
                    </div>
                </div>
            )) : <p className='min-h-screen'>No item left..</p>}
        </div>
    )
}

export default ListingItems