
// get from localStorage
export const getFromLocalStorage = (storage) => {
    return JSON.parse(localStorage.getItem(storage))
}

// add to localStorage
export const addToLocalStorage = (storage, data) => {
    return localStorage.setItem(storage, JSON.stringify(data))
}
















