import React from 'react'
import SubSup from 'pubsub-js'

class About extends React.Component{
    componentDidMount(){
        console.log(this.props.comments)
    }
    // delmsg=(event)=>{
    //    let delindex=event.currentTarget.getAttribute("index")
    //     this.props.Delclick(delindex)
    // }
    delmsg=(event)=>{ //发布事件
        let delindex=event.currentTarget.getAttribute("index")
        SubSup.publish("Delcomment",delindex)
    }
    render(){
        let comment=this.props.comments
        return(
            <div>
                <p>评论区</p>
                <ul>
                    {comment.map(((item,index)=>{return <li key={index}>{item} <button onClick={this.delmsg} index={index}>删除</button></li> }))} 
                </ul>
            </div>
        )
    }
}
export default About