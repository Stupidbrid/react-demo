import React,{Component} from 'react';
import axios from 'axios';
class Home extends Component{
    constructor(props){
        super(props);
        this.state=({
            infos:[]
        })
    }
    componentDidMount(){
        console.log("mack")
        axios.get('http://localhost:9095/rest/users/all').then((res)=>{
            if(res &&res.data){
                console.log(res.data)
                this.setState({infos:res.data})
            }
        })
    }
    render(h) {
      
        let {infos}=this.state
        return<div>
            {/* {
                infos&&infos.map((item)=>{
                    let {mock_name,mock_xb,mock_city,mock_xq}=item;
                    return <div><span>{mock_name}</span>
                    <span>{mock_xb}</span>
                    <span>{mock_city}</span>
                    <span>{mock_xq}</span></div>
                })
            } */}
        </div>
    }
}
export default Home