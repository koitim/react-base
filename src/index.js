import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadDevs } from './actions/devActions'

const store = configureStore();
store.dispatch(loadDevs())

ReactDOM.render(
    <Provider store={store}>
        <Router ><App /></Router>
    </Provider>,
    document.getElementById('root'));
