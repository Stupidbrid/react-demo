import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import Home from '../views/home'
import About from '../views/about'
import Mynavlink from '../mynavlink'

export default class APP extends React.Component {
    render() {
        return (<div>
            <h1>React-router</h1>
            <div>
                <Mynavlink to="/about1">about</Mynavlink>
            </div>
            <div>
                <Mynavlink to="/home" >home</Mynavlink>
            </div>
            <div>
                <Switch>
                    <Route path="/about1" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Redirect to="/about" />
                </Switch>
            </div>
        </div>)
    }
    
}