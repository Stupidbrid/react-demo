import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import {count} from './reducers';
console.log("redux/store")
export  const Store=createStore(count,applyMiddleware(thunk)) //applyMiddleware(thunk)异步中间件

// const Store= createStore(count)
// export default Store
//index的导入就位 import Store from './redux/store'