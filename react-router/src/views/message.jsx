import React from 'react'
import {Route,Switch} from 'react-router-dom'

import Message_detail from '././message_detail';
import Mynavlink from '../mynavlink'

export default class Message extends React.Component {
      state = {
            message: [{ id: 0, title: "message0" }, { id: 1, title: "message1" }, { id: 2, title: "message2" }, { id: 3, title: "message3" }]
      }
      // componentDidMount = () => {
      //       let message = [{ id: 0, title: "message0" }, { id: 1, title: "message1" }, { id: 2, title: "message2" }, { id: 3, title: "message3" }]
      //       setTimeout(() => {
      //             this.setState({ message })
      //       }, 1000)
      // }
      render() {
            return (
                  <div>
                        <ul>
                              {this.state.message.map((item, index) => {
                                    return <li key={index}>{item.id} <Mynavlink to={`/home/message/message_detail/${item.id}`} >{item.title}</Mynavlink> </li>
                              })}
                        </ul>
                        <div>
                        <Switch>
                              <Route path="/home/message/message_detail/:id" component={Message_detail}></Route>
                        </Switch>
                        </div>
                        
                  </div>
            )
      }
}
