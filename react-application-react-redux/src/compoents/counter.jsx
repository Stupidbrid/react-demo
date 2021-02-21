import React from 'react'
import PropType from 'prop-types'


console.log("compoents/counter")
export default class Counter extends React.Component {
  static PropType={
    count:PropType.number.isRequired,
    ADDFUN:PropType.func.isRequired,
    DELFUN:PropType.func.isRequired,
    ASYNCFUN:PropType.func.isRequired
  }
  addcount = () => {

    let number=this.select.value
    debugger
     this.props.ADDFUN(number)   
  }
  decount = () => {
    let number=this.select.value
    this.props.DELFUN(number)
  }
  addasync=()=>{
    let number=this.select.value
    this.props.ASYNCFUN(number)
  }
  render() {
    let StyleButton = {
      marginRight: 5
    }
    debugger
    let count=this.props.count
    return (
      <div>
        <p>点击了{count}次</p>
        <select style={{ marginRight: 5 }} ref={select => this.select = select}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button style={StyleButton} onClick={this.addcount}>+</button>
        <button style={StyleButton} onClick={this.decount}>-</button>
        <button style={StyleButton} onClick={this.addasync}>addasync</button>
      </div>
    )
  }
}

  






