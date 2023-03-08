
// get all products
export const getAllProducts = async (dispatch) => {
    const productsUrl = 'https://dummyjson.com/products'
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl)
        const { products } = await resp.json()
        const categories = ["all", ...new Set(products.map(item => item.category))]
        dispatch({ type: "GET_ALL_PRODUCTS", payload: { products, categories } })
    } catch (error) {
        console.log(error)
    }
}

// get products by category
export const getProductsByCategory = async (dispatch, category) => {
    const categoryUrl = `https://dummyjson.com/products/category/${category}`
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(categoryUrl)
        const { products } = await resp.json()
        dispatch({ type: "GET_PRODUCTS_BY_CATEGORY", payload: { products } })
    } catch (error) {
        console.log(error)
    }
}

// searching products
export const searchingProducts = async (dispatch, searchTerm) => {
    const productsUrl = 'https://dummyjson.com/products'
    dispatch({ type: "LOADING" })
    try {
        const resp = await fetch(productsUrl)
        const { products } = await resp.json()
        const filteredProducts = products.filter(product => product.title.toUpperCase().includes(searchTerm.toUpperCase()))
        dispatch({ type: "SEARCH", payload: { filteredProducts } })
    } catch (error) {
        console.log(error)
    }
}






