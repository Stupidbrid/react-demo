import React from 'react';
import SubSup from 'pubsub-js'
import Home from './components/Home';
import About from './components/About';
class App extends React.Component {
  state={
    comments:['123','456']
  }
  componentDidMount=()=>{
    SubSup.subscribe("Delcomment",(msg,index)=>{
      this.Delclick(index)
    })
  }//订阅事件
  Handelclick=(comment)=>{
    let {comments}=this.state
    comments.push(comment)
    this.setState({comments})
  }
  Delclick=(index)=>{
    let {comments}=this.state
    comments.splice(index,1)
    this.setState({comments})
  }
  render(){
    let {comments}=this.state;
    console.log(comments)
    return (
      <div>
          <Home Handelclick={this.Handelclick}/>
          <About comments={comments}  Delclick={this.Delclick}/>
      </div>
    );
  }
}

export default App;
