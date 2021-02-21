import React from 'react'
let message = [{ id: 0, title: "message0",text:"文本1" }, { id: 1, title: "message1",text:"文本2"}, { id: 2, title: "message2",text:"文本3" }, { id: 3, title: "message3",text:"文本4" }]
export default function Message_detail(props) {
    let id=props.match.params.id
    const arr = message.find((m)=>m.id===id*1)  //返回第一个结果为true的对象
    return (<ul>
        <li>{arr.id}</li>
        <li>{arr.title}</li>
        <li>{arr.text}</li>
    </ul>)
   
    // return(<div>123</div>)
}