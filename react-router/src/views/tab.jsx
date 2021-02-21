import React from 'react'
export default class Tab extends React.Component{
  
   render(){
    console.log(this.props.location.state)
      return(
            <div>React-tab ++{this.props.location.state.id}模板</div>
      )
    }
}
