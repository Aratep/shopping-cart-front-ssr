import {ALL_PRODUCTS, REMOVE_PRODUCT} from '../constants/constants'
import {allProducts} from "../actions";
import {getAllProducts} from '../services/product-service'

const products = (state = [], action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {...state,  products: action.products, count: action.count};
        case REMOVE_PRODUCT:
            return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
        default:
            return state
    }
}

export const _getAllProducts = () => (dispatch, getState) => {
    return getAllProducts()
        .then(response => response.json())
        .then(products => dispatch(allProducts(products.products, products.count)))
        .catch(err => dispatch(console.log(err)));
};

export default products