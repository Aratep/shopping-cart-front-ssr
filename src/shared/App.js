import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import {Provider} from 'react-redux';

import {AppRouting} from './routes/AppRoutes';
import NavBar from './components/header/NavBar';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer";
import './App.css';


class App extends Component {
    render() {
        return (
            <div className=''>
                <NavBar/>
                <div className="w3-main custom-main " style={{marginLeft: 250 + "px"}}>
                    <Header/>
                    <div className='margin'>
                        <AppRouting/>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;


// import React, {Component} from "react";
// import {Route} from "react-router-dom";
// import routes from "./routes";
// import "./App.css";
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 {routes.map((route, i) => <Route key={i} {...route} />)}
//             </div>
//         );
//     }
// }
//
// export default App;
