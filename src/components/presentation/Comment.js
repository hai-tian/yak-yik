import React, { Component } from "react"



export default class Comment extends Component {
  
  render(){
    return (
      <div>
        <p style={ { fontSize: 16, fontWeight: 400 } }>{this.props.body}</p>
        <span style={{ fontWeight: 200 }}>{this.props.username}</span>
        <span style={{ fontWeight: 200, marginLeft: 12, marginRight: 12 }}>|</span>
        <span style={{ fontWeight: 200 }}>{ this.props.timestamp }</span>
        <hr/>
      </div>
    )
  }
}
