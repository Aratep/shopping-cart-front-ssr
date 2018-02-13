import {
    POST,
    PUT,
    DELETE,
    HEADERS,
    GET,
    CREATE_PRODUCT_URL,
    UPDATE_PRODUCT_URL,
    DELETE_PRODUCT_URL,
    PRODUCTS_LIST_URL,
    ADMIN_LOGIN_URL,
    ADD_TO_CART_URL,
    GET_CART_LIST_URL,
    DELETE_FROM_CART,
    tokenToVerify
} from '../constants/constants';

export const createProduct = (body) => {
    return fetch(CREATE_PRODUCT_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
};


export const deleteProduct = (body) => {
    return fetch(DELETE_PRODUCT_URL, {
        method: DELETE,
        headers: HEADERS,
        body: body
    })
};

export const adminLogin = (body) => {
    return fetch(ADMIN_LOGIN_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
};

export const updateItem = (body) => {
    return fetch(UPDATE_PRODUCT_URL, {
        method: PUT,
        headers: HEADERS,
        body: body
    })
}

export const addToCart = (body) => {
    return fetch(ADD_TO_CART_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
};

export const getCartList = (body) => {
    return fetch(GET_CART_LIST_URL, {
        method: POST,
        headers: HEADERS,
        body: body
    })
};

export const deleteFromCart = (body) => {
    return fetch(DELETE_FROM_CART, {
        method: DELETE,
        headers: HEADERS,
        body: body
    })
}

export const getAllProducts = () => {
    return fetch(PRODUCTS_LIST_URL, {
        method: GET,
        headers: {'x-access-token': tokenToVerify}
    })
}

// export const getToken = () => {
//     return fetch(TOKEN_URL, {
//         method: GET
//     })
// }