import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {PrivateRoute} from './PrivateRouter';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import SingleProductContainer from '../containers/SingleProduct';
import ProductListContainer from '../containers/ProductList';
import UserCartContainer from '../containers/UserCart';
import UserAccountContainer from '../containers/UserAccount';
import {NoMatch} from '../components/404/NoMatch';




export const routes = [
    {
        path: "/",
        exact: true,
        component: ProductListContainer
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
        component: ProductListContainer
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
    {
        // path: "/my-account",
        component: NoMatch
    }
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
            <Route {...routes[7]} />
        </Switch>
    </div>
)

