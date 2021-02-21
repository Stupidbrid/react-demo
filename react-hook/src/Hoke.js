import React, {useState,useEffect,useContext,createContext,useReducer} from 'react';
//useState解决数据传递,useEffect解决生命周期,useCotext解决父子组件传值,useReducer解决状态共享
import {HashRouter, Route, Switch,Link} from 'react-router-dom'
const countContext=createContext();
 function HookDoem(){
    let [count,addCount]=useState(0);//数组结构  userState不能存着条件判断语句中
    useEffect (()=>{
        console.log("useEffect");
        return ()=>{
            console.log("exituseEffect");
        }
    },[count]);   //第二个参数为数组,当里面监听的元素改变时,执行解绑方法
    return ( 
        <div>
            <p>{`点击了${count}次`}</p>
            <button onClick={()=>{addCount(count+1)}}>点击</button>
            <countContext.Provider value={count}>
                <HookDoemChild/>
            </countContext.Provider>
            <HookDoemChildTwo/>
            <HashRouter>
                <li><Link to="/">Homepage</Link></li>
                <li><Link to="/pageList">pageList</Link></li>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/pageList" component={pageList}/>
                </Switch>
            </HashRouter>
        </div>
    );
 }
 function Homepage(){
    useEffect (()=>{
        console.log("comingHomepage");
        return ()=>{
            console.log("exitHomepage");
        }
    },[])
     return (
         <h2>Homepage</h2>
     )
}
 function pageList(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect (()=>{
        console.log("comingpageList");
        return ()=>{
            console.log('exitpageList')
        }
    },[])
    return (
        <h2>pageList</h2>
    )
}
function HookDoemChild(){
    let count=useContext(countContext);
    return(
        <p>{count}</p>
    )
}
function HookDoemChildTwo(){
    const [counts,dispatch]=useReducer((state,action)=>{
        // eslint-disable-next-line default-case
        switch(action){
            case 'add':
                return state+1;
            case 'sub':
                return state-1;
            default :
                return state;
        }
    },0)
    return(
        <div>
            <h3>useReducer解决状态共享</h3>
            <button onClick={()=>{dispatch("add")}}>点击增加</button>
            <button onClick={()=>{dispatch('sub')}}>点击减少</button>
            <p>{`点击了${counts}次`}</p>
        </div>
    )
}
export default HookDoem