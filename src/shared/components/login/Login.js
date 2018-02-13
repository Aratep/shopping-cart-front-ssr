import React, {Component} from 'react';
import {reset} from 'redux-form';

import LoginTemplate from './LoginTemplate';
import {login, getToken} from '../../services/auth-service';

class Login extends Component {
    // constructor() {
    //     super();
    //
    //     this.state = {
    //         token: null,
    //         loginStatus: '',
    //         redirectToReferrer: false,
    //         loading: false
    //     }
    // }
    //
    // componentWillMount() {
    //     this.getApiToken();
    // }
    //
    // getApiToken = () => {
    //     getToken()
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(body => {
    //             localStorage.setItem('tokenToVerify', body.token);
    //             this.setState({token: body.token})
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         });
    // }
    //
    handleSubmit = (values, dispatch) => {
        console.log(values)
        // const username = values.username;
        // const password = values.password;
        // const token = this.state.token;
        //
        // login(JSON.stringify({username, password, token}))
        //     .then(response => {
        //         if (response.status === 200) {
        //             dispatch(reset('loginForm'));
        //             setTimeout(() => {
        //                 this.setState({
        //                     loginStatus: '',
        //                     redirectToReferrer: true,
        //                     loading: false
        //                 })
        //             }, 150)
        //         }
        //         return response.json()
        //     })
        //     .then(body => {
        //         console.log(body)
        //         this.setState({
        //             loginStatus: body.message,
        //         });
        //         localStorage.setItem('userToken', body.token);
        //     })
        //     .catch(err => {
        //         this.setState({
        //             loginStatus: 'Server is no available. Please try later!',
        //             loading: true
        //         });
        //         console.log(err)
        //     });
        // this.setState({
        //     loginStatus: '',
        //     loading: false
        // })
    }

    render() {
        // const {loginStatus, redirectToReferrer} = this.state;
        // const {from} = this.props.location.state || {from: {pathname: '/my-account'}};

        return (
            <LoginTemplate
                onSubmit={this.handleSubmit}
                // loginStatus={loginStatus}
                // redirectToReferrer={redirectToReferrer}
                // from={from}
            />
        );
    }
}

export default Login;
