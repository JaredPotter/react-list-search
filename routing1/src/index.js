import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Users from './pages/Users';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <Route path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LoginPage} />
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
