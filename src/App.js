import React, { Component } from 'react'
import mail from './seeds.json'
import './App.css'
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'

export default class App extends Component {

  componentWillMount(){
    this.state = {messages: mail}
  }
      
  render() {
    return (
      <div>
      <Toolbar
        messages={this.state.messages}
        unreadCount={this.unreadCount}
        bulkSelect={this.bulkSelect}
        deleteMessage={this.deleteMessage}
        markAsRead={this.markAsRead}
        markAsUnread={this.markAsUnread}
        applyLabel={this.applyLabel}
        removeLabel={this.removeLabel}
      />
      <MessageList
        messages={this.state.messages}
        selectStar={this.selectStar}
        selectedMessage={this.selectedMessage}
      />
    </div>)
  }

  applyLabel = (e) => {
    e.preventDefault()
    let messages = this.state.messages
    for (let i = 0; i < messages.length; i++) {
      if(messages[i].selected === true && !messages[i].labels[e.target.value]) {
        console.log(e.target.value)
        if(e.target.value === 'Apply label') return
        else if(e.target.value === messages[i].labels || messages[i].labels.includes(e.target.value)){
          console.log(messages[i].labels)
          return
        } else {
        messages[i].labels.push(e.target.value)
        this.setState({messages})
        }
        
      }
    }
  }

  removeLabel = (e) => {
    e.preventDefault()
    let messages = this.state.messages
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].selected === true) {
        let labels = messages[i].labels
        messages[i].labels = labels.filter(label => label !== e.target.value)
        this.setState({messages})
      }
    }
  }

  markAsRead = () => {
    let messages = this.state.messages
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].selected === true) {
        messages[i].read = true
        this.setState({messages})
      }
    }
  }

  markAsUnread = () => {
    let messages = this.state.messages
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].selected === true) {
        messages[i].read = false
        this.setState({messages})
      }
    }
  }

  unreadCount = () => {
    let messages = this.state.messages
    let unread = []
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].read === false) unread.push(messages[i])
    }
    return unread.length
  }

  selectedMessage = (index) => {
    let messages = this.state.messages
    if (messages[index].selected === true) {
      messages[index].selected = false
      this.setState({messages})
    } else {
      messages[index].selected = true
      console.log(index)
      this.setState({messages})
    }
  }

  selectStar = (index) => {
    let messages = this.state.messages
    if (messages[index].starred === true) {
      messages[index].starred = false
      this.setState({messages})
    } else {
      messages[index].starred = true
      console.log(index)
      this.setState({messages})
    }
  }

  bulkSelect = () => {
    let messages = this.state.messages
    let selected = messages.filter(mes => mes.selected === true)
    if (selected.length === messages.length) {
      for (let i = 0; i < messages.length; i++) {
        messages[i].selected = false
        this.setState({messages})
      }
    } else {
      for (let i = 0; i < messages.length; i++) {
        messages[i].selected = true
        this.setState({messages})
      }
    }
  }

  deleteMessage = () => {
    let messages = this.state.messages
    let remaining = []
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].selected !== true) {
        remaining.push(messages[i])
        this.setState({messages: remaining})
      }
    }
  }


}


