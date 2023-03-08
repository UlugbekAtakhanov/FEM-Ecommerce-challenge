export const reducer = (state, { type, payload }) => {

    if (type === "LOADING") return { ...state, loading: true }

    if (type === "GET_ALL_PRODUCTS") return { ...state, products: payload.products, categories: payload.categories, loading: false }

    if (type === "GET_PRODUCTS_BY_CATEGORY") return { ...state, products: payload.products, loading: false }

    if (type === "SEARCH") return { ...state, products: payload.filteredProducts, loading: false }


    if (type === "GET_ALL_DATA_FROM_LS") return { ...state, cart: payload.cartList, wishlist: payload.wishlist, loading: false }

    if (type === "ADD_TO_LS") return { ...state, [payload.storage]: [...state[payload.storage], payload.product] }

    if (type === "REMOVE_FROM_LS") return { ...state, [payload.storage]: payload.arr }

    return state
}