import React from 'react'
import ReactDOM  from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import APP from './components/app'
import './index.css'
ReactDOM.render((
    <BrowserRouter>
    <APP />
    </BrowserRouter>
  ),document.getElementById("root"))
   
