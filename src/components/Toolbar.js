import React, { Component } from 'react'

export default class Toolbar extends Component {
  constructor(props){
    super(props)
  }

  render() {

    let messages = this.props.messages
    let selected = []
    let className = ''
    let disabled = ''

    for (let i = 0; i < messages.length; i++) {
      if (messages[i].selected === true) selected.push(messages[i]) 
    }

    if (selected.length === messages.length) className += 'fa-check-square-o'
    else if (selected.length <= messages.length && selected.length >= 0) className += 'fa-minus-square-o'
    else {
      className += 'fa-square-o'
      disabled = 'disabled'
    }

    return (
      <div className="container">
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{this.props.unreadCount()}</span>
            unread messages
          </p>

          <a className="btn btn-danger">
            <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default" onClick={() => this.props.bulkSelect()}>
            <i className={`fa ${className}`}></i>
          </button>

          <button className="btn btn-default" disabled={`${disabled}`} onClick={() => this.props.markAsRead()}>Mark As Read</button>
          <button className="btn btn-default" disabled={`${disabled}`} onClick={() => this.props.markAsUnread()}>Mark As Unread</button>

          <select className="form-control label-select" disabled={`${disabled}`} onChange={e => this.props.applyLabel(e)}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" disabled={`${disabled}`} onChange={e => this.props.removeLabel(e)}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" disabled={`${disabled}`} onClick={() => this.props.deleteMessage()}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
      </div>
      </div>
    );
  }
}
