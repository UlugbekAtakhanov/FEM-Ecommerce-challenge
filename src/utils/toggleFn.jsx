import { addToLocalStorage, getFromLocalStorage } from "./fetchFromLS"

export const toggleFn = (storage, product, dispatch) => {
    const store = getFromLocalStorage(storage) || []
    const element = store.find(item => item.id === product.id)
    if (element) {
        const arr = store.filter(item => item.id !== element.id)
        addToLocalStorage(storage, arr)
        dispatch({ type: "REMOVE_FROM_LS", payload: { storage, arr } })
    } else {
        addToLocalStorage(storage, [...store, product])
        dispatch({ type: "ADD_TO_LS", payload: { storage, product } })
    }
}