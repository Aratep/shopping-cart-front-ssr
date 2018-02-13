// import {SINGLE_PRODUCT, REMOVE_PRODUCT} from '../constants/constants'
import {SINGLE_PRODUCT} from '../constants/constants'
import {getAllProducts} from "../services/product-service";
import {singleProduct} from "../actions";

const product = (state = [], action) => {
    switch (action.type) {
        case SINGLE_PRODUCT:
            return {...state,  product: action.product};
        // case REMOVE_PRODUCT:
        //     return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
        default:
            return state
    }
}

export const _singleProduct = () => (dispatch, getState) => {
    return getAllProducts()
        .then(response => response.json())
        .then(products => {
            // console.log(getState)
            const product = products.products.filter(prod => prod._id === '5a83026123d23d18fcfae0ae');
            dispatch(singleProduct(product, product.variants))
        })
        .catch(err => dispatch(console.log(err)));
};


// getProductList = () => {
//     const {dispatch} = this.props;
//     const id = this.props.match.params.id;
//
//     getAllProducts()
//         .then((response) => {
//             return response.json();
//         })
//         .then(products => {
//             const product = products.products.filter(prod => prod._id === id);
//             dispatch(singleProduct(product, product.variants))
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// };


export default product