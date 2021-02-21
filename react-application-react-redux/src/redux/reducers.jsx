
import {ADD,DEL} from './action-type'
debugger
console.log("redux/reducers")
export  function count(state=0,action){
	debugger
    switch(action.type){
		case ADD:
            debugger
		return state+action.data*1
		case DEL:
		return state-action.data*1
		default:
		return state
	}
}