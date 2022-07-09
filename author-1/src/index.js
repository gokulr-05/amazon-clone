import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';

import Home from './pages/Home/Home';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
