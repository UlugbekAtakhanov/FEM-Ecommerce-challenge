import { useReducer, createContext } from 'react'
import { reducer } from './utils/reducer'
import { createRoutesFromElements, Outlet, Route } from "react-router-dom"

import Home from './pages/Home'

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import BreadCrumb from './components/BreadCrumb'
import SearchBar from './components/SearchBar'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'


export const ProductsContext = createContext()

const App = () => {

	const initialValue = {
		loading: true,
		products: [],
		categories: [],
		cart: [],
		wishlist: [],
	}
	const state = useReducer(reducer, initialValue)

	return (
		<ProductsContext.Provider value={state}>
			<Navbar />
			<SearchBar />
			<BreadCrumb />
			<Outlet />
			<Footer />
		</ProductsContext.Provider>
	)
}

export default App


export const routes = createRoutesFromElements(
	<Route path="/" element={<App />}>
		<Route index element={<Home />} />
		<Route path="/wishlist" element={<Wishlist />} />
		<Route path="/cart" element={<Cart />} />
	</Route>
)

