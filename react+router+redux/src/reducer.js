import { combineReducers } from 'redux';
import routerReducer from 'react-router-redux';
import comReducer from './component/redux/reducer';

// 合并管理
const reducer = combineReducers({
    routing: routerReducer,
    comp:comReducer,
});
export default reducer;
