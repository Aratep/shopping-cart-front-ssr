import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
// import reducer from "./ducks";

import products from './reducers/products';
import product from './reducers/product';
import userProducts from './reducers/userProducts';
import currentUser from './reducers/currentUser';

const reducer = combineReducers({
    form: formReducer,
    products,
    product,
    userProducts,
    currentUser
});

const configureStore = preloadedState =>
  createStore(reducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
