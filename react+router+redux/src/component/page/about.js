import React,{Component} from 'react';
//  const About = (props) =>{
//      console.log(props);
//      return <div>
//          <span>
//          This is about
//      </span>
//      <button onClick={()=>}>跳到home</button>
//          </div>
//  }
 class About extends Component{
     skiptoHome(){
         this.props.history.push('/')
     }

     render(){
        return <div>
        <span>
        This is about
    </span>
    <button onClick={this.skiptoHome.bind(this)}>跳到home</button>
        </div>

     }
 }
 export default About;