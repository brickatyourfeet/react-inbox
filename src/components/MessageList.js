import React, { Component } from 'react';
import Message from './Message'

export default class MessageList extends Component {
  render() {
    return (
      <div className="container">
        {this.props.messages.map(message =>
          <Message
            selectStar={ ()=> this.props.selectStar(this.props.messages.indexOf(message))}
            selectedMessage={ ()=> this.props.selectedMessage(this.props.messages.indexOf(message))}
            key={message.id}
            message={message}
            />) }
      </div>
    )
  }
}