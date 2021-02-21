import {connect} from 'react-redux'
import {ADDFUN,DELFUN,ASYNCFUN}  from '../redux/action'

import Couner from '../compoents/counter'
console.log("containers/app.js")
debugger
export default connect(
    state=>({count:state}),
    {ADDFUN,DELFUN,ASYNCFUN})(Couner)
    //{ADDFUN,DELFUN}==={ADDFUN:ADDFUN,DELFUN:DELFUN}  前面的属性名和APP.js中接收的ADDFUN属性一致，
    //后面的属性值和action.js中的函数名一致