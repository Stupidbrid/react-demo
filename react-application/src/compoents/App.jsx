import React from 'react'
export default class App extends React.Component{
      state={
            select_value:1,
            count:0
      }
      handChage=(event)=>{
           this.setState({select_value:event.target.value}) //受控组件获取数据方式
           console.log(this.select.value) //非受控组件获取数据方式
      }
      addcount=()=>{
            debugger
            let add_count=this.state.count;
            this.setState({count:add_count+=this.state.select_value*1})
      }
      decount=()=>{
            let de_count=this.state.count;
            this.setState({count:de_count-=this.state.select_value*1})
      }
   render(){
     let StyleButton={
            marginRight:5 
      }
      return(
            <div>
                  <p>点击了{this.state.count}次</p>
                  <select style={{marginRight:5}} value={this.state.select_value} onChange={this.handChage} ref={select=>this.select=select}> 
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                  </select>
                  <button style={StyleButton} onClick={this.addcount}>+</button>
                  <button style={StyleButton} onClick={this.decount}>-</button>
            </div>
      )
    }
}


