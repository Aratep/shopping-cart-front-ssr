import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {PrivateRoute} from './PrivateRouter';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import ProductList from '../components/products/ProductList';
import SingleProduct from '../components/single-product/SingleProduct';
import UserCart from '../components/user-cart/UserCart';
import UserAccount from '../components/user-account/UserAccount';
import SingleProductContainer from '../containers/SingleProduct';
import UserCartContainer from '../containers/UserCart';
import UserAccountContainer from '../containers/UserAccount';
import {NoMatch} from '../components/404/NoMatch';




export const routes = [
    {
        path: "/",
        exact: true,
        component: ProductList
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/products-list",
        component: ProductList
    },
    {
        path: "/my-cart",
        component: UserCartContainer
    },
    {
        path: "/my-account",
        component: UserAccountContainer
    },
    {
        path: "/product-list/product/:id",
        component: SingleProductContainer
    },
    // {
    //     path: "/my-account",
    //     component: News
    // }
];

export const AppRouting = () => (
    <div>
        <Switch>
            <Route {...routes[0]}/>
            <Route {...routes[1]}/>
            <Route {...routes[2]}/>
            <Route {...routes[3]}/>
            <Route {...routes[4]}/>
            <Route {...routes[5]}/>
            <Route {...routes[6]}/>
        </Switch>
    </div>
)

