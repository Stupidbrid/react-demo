import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './containers/app';



import {Store} from './redux/store'
//界面封装
console.log("index.js")
ReactDOM.render(
    
    <Provider store={Store}>
        <App />
    </Provider>,
document.getElementById('root'));
