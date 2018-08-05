import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Provider } from 'react-redux';
import store from './config/store';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
    <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
            <BrowserRouter><App /></BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
