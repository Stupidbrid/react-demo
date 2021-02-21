// import './css/index.css';
// import './css/main.less';
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import {Provider} from 'react-redux';
// import App from './component/app';
// // import store from './store';

// import { LocaleProvider } from 'antd';
// import zhCN from 'antd/es/locale-provider/zh_CN';
// // import moment from 'moment';
// // import 'moment/locale/zh-cn';
// import 'antd/dist/antd.css';
// import './css/index.css';
// import './css/main.less';
import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
// import App from './component/redux/container'
import {Provider} from 'react-redux';
import store from './store'
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import 'mockjs';
ReactDom.render(
  
    <Provider store={store}>
    <App />,
    </Provider>,
    document.getElementById('app')
);

// ReactDom.render(
//     <App/>
//     ,document.getElementById("app")
// )