import React from 'react'
import {NavLink} from 'react-router-dom'
export default class Mynavlink extends React.Component{
   render(){
      return  <NavLink {...this.props} /> //将外部传入的所有属性 传递给navlink
    }
}
