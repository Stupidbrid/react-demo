import React from 'react'


class Home extends React.Component{
    
    state={
        commet:"1",
       
    }

    Handelchange=(event)=>{
        this.setState({commet:event.target.value})
    }
    Submitclick=()=>{
        let {commet}=this.state
        this.props.Handelclick(commet)
        this.setState({commet:''})
    }
    render(){
        let {commet}=this.state
        
        return(<div>
             输入:<input type="text" ref="table" value={commet} onChange={this.Handelchange}/>
             <button onClick={this.Submitclick} >点击</button>   
        </div>  
        )
    }
}
export default Home


