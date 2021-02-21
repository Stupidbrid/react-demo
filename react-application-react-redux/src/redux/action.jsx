import {ADD,DEL} from '../redux/action-type'

console.log("redux/action")
//同步action返回对象，异步action返回函数
export const ADDFUN=(number)=>({type:ADD,data:number}) //生成并返回action对象
export const DELFUN=(number)=>({type:DEL,data:number})  //生成并返回action对象

//默认只能同步返回对象，无法异步返回方法，使用异步需在store.js中声明异步中间件
export const ASYNCFUN=(number)=>{
    return dispatchEvent=>{
            setTimeout(() => {
                dispatchEvent(ADDFUN(number)) //分发action
            }, 1000);
    }
}