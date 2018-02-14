import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import jwt from "jsonwebtoken";
import ReactLoading from 'react-loading';

import {getCurrentUser} from '../../actions/index';
import {_getCurrentUser} from "../../reducers/currentUser";

class UserAccount extends Component {
    componentDidMount() {
        // this.userProfile();
        const currentUserToken = localStorage.getItem('userToken');

        if (!this.props.currentUser) {
            this.props.dispatch(UserAccount.initialAction(currentUserToken));
        }
    }

    static initialAction = (token) => {
        return _getCurrentUser(token);
    }


    userProfile = () => {
        const {dispatch} = this.props;
        const currentUserToken = localStorage.getItem('userToken');

        if (currentUserToken) {
            jwt.verify(currentUserToken, 'secret_key', (err, user) => {
                if (err) console.log(err);
                if (user) {
                    dispatch(getCurrentUser(user.user))
                }
            })
        }
    }

    render() {
        const {currentUser} = this.props;

        if (currentUser === undefined) {
            return <ReactLoading color='black' type='spokes' className="center"/>
        }

        return (
            <div>
                <h1>My Profile</h1>
                {
                    Object.values(currentUser).map((user, ind) => {
                        return <div key={ind}>
                            <div>
                                <span>My Username</span> <span><b>{user.username}</b></span>
                            </div>
                            <div>
                                <span>My Mail</span> <span><b>{user.email}</b></span>
                            </div>
                        </div>
                    })
                }
                <div>
                    <Link to='/products-list' className='w3-button w3-black w3-round-large'>Back</Link>
                </div>
            </div>
        )
    }
}

export default UserAccount