import React, { useContext } from 'react'
import { ProductsContext } from '../App'
import ListingItems from '../components/ListingItems'

const Wishlist = () => {
    const [{ wishlist }] = useContext(ProductsContext)
    return <ListingItems grid={false} list={wishlist} />
}

export default Wishlist