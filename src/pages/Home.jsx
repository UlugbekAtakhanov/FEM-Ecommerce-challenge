import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../App'
import ListingItems from '../components/ListingItems'
import Spinner from '../components/spinner/Spinner'
import { getAllProducts, getProductsByCategory } from '../utils/fetchData'

const Home = () => {

	const [grid, setGrid] = useState(false)
	const [{ loading, categories, products }, dispatch] = useContext(ProductsContext)


	useEffect(() => {
		getAllProducts(dispatch)
	}, [])


	const selectCategoryHandler = (e) => {
		const category = e.target.value
		if (category === "all") {
			return getAllProducts(dispatch)
		}
		return getProductsByCategory(dispatch, category)
	}


	return (
		<div className='main-container min-h-screen'>
			{/* upper */}
			<div className='flex justify-between mb-4'>
				<select className='border p-1 rounded text-black outline-none' onChange={selectCategoryHandler}>
					{categories.map((category, index) => (
						<option key={index} value={category}>{category}</option>
					))}
				</select>
				<div className='flex items-center gap-2'>
					<button onClick={() => setGrid(true)} className='border rounded-md p-1 group'>
						<ListBulletIcon className='w-6 text-gray-500 group-hover:text-cred' />
					</button>
					<button onClick={() => setGrid(false)} className='border rounded-md p-1 group'>
						<Squares2X2Icon className='w-6 text-gray-500 group-hover:text-cred' />
					</button>
				</div>
			</div>

			{/* list */}
			{loading ? <Spinner /> : <ListingItems grid={grid} list={products} />}

		</div>

	)
}

export default Home