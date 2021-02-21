import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Mynavlink from '../mynavlink'
import Message from './message'
import News from './news'
import Tabs from './tab';
export default class Home extends React.Component{
     
   render(){
      let  query = {
            pathname: '/home/tabs',
            state: {id:1,zj:2}
       }
      return(
            <div>
                  <h1>React-home 模板</h1>
                       <div>
                             <Mynavlink to="/home/message">message</Mynavlink>
                        </div> 
                        <div>
                              <Mynavlink to="/home/news">news</Mynavlink>
                        </div>                       
                        <div>
                              <Mynavlink to={query} >tabs</Mynavlink>
                        </div> 
                  <Switch>
                        <Route path="/home/message" component={Message}></Route>
                        <Route path="/home/news" component={News}></Route>
                        <Route path='/home/tabs' component={Tabs}></Route>
                  </Switch>
                  {this.props.children}
            </div>
      )
    }
   }
