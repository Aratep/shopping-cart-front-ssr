import {CURRENT_USER} from '../constants/constants'
import {getCurrentUser} from "../actions";
import jwt from "jsonwebtoken";

const currentUser = (state = [], action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {...state,  currentUser: action.currentUser};
        // case REMOVE_PRODUCT:
        //     return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
        default:
            return state
    }
}

export const _getCurrentUser = (currentUserToken) => (dispatch, getState) => {
    console.log()
    if (currentUserToken) {
        jwt.verify(currentUserToken, 'secret_key', (err, user) => {
            if (err) console.log(err);
            if (user) {
                dispatch(getCurrentUser(user.user))
            }
        })
    }
};



// userProfile = () => {
//     const {dispatch} = this.props;
//     const currentUserToken = localStorage.getItem('userToken');
//
//     if (currentUserToken) {
//         jwt.verify(currentUserToken, 'secret_key', (err, user) => {
//             if (err) console.log(err);
//             if (user) {
//                 dispatch(currentUser(user.user))
//             }
//         })
//     }
// }

export default currentUser