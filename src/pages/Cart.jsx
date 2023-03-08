import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import ListingItems from '../components/ListingItems'

const Cart = () => {
    const [{ cart }] = useContext(ProductsContext)
    return (
        <div className='flex main-container gap-8'>
            <div className='flex-[2]'>
                <ListingItems grid={true} list={cart} />
            </div>
            <div className='flex-1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum harum ipsum sit illo officiis dignissimos nesciunt nulla adipisci velit voluptatibus dicta commodi molestiae, nobis quae aliquam, magnam inventore quam.
            </div>
        </div>
    )
}

export default Cart