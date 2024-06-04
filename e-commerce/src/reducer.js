export const reducer = (state, {type, payload}) => {

    if (type === "GET_PRODUCTS") {
        return {...state, products: payload}
    }

    if(type === "ADD_TO_CART") {
        return {...state, cart: [...state.cart, payload]}
    }

    if(type === "ADD_TO_WISHLIST") {
        return {...state, wishlist: [...state.wishlist, payload]}
    }

    if(type === "SET_CATEGORIES") {
        return { ...state, categories: payload };
    }

    if(type === 'SET_SEARCH_QUERY') {
        return {...state, search: payload}
    }

    return state;
}