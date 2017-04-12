import React, { Component } from "react"
import Comment from "../presentation/Comment"
import styles from "./styles"
const commentStyle = styles.comment



export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comment: {
        username: "",
        body: "",
        timestamp: ""
      },
      list: []
    }
  }

  submitComment() {
    console.log("submitComment" + JSON.stringify(this.state.comment))
    let updatedList = Object.assign([], this.state.list)
    updatedList.push(this.state.comment)

    this.setState({
      list: updatedList
    })
  }

  updateUserName(event) {
    // console.log("updateUserName: " + event.target.value)
    // this.state.comment["username"] = event.target.value  //不能这么用 wrong
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment["username"] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }

  updateBody(event) {
    // console.log("updateBody: " + event.target.value)
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment["body"] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }

  updateTimestamp (event) {
    // console.log("updateTimestamp: " + event.target.value)
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment["timestamp"] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }

  render(){
    const commentList = this.state.list.map((comment, i) => {
      return (
        <li key={i}><Comment {...comment}/></li>
      )
    })

    return (
      <div>
        <h2>Comment: Zone</h2>
        <div style={ commentStyle.commentsBox }>
          <ul style={commentStyle.commentsList}>
            { commentList }
          </ul>

          <input onChange={ (e) => this.updateUserName(e) } className="form-control" type="text" placeholder="User Name"/> <br/>
          <input onChange={ (e) => this.updateBody(e) } className="form-control" type="text" placeholder="Comment"/> <br/>
          <input onChange={ (e) => this.updateTimestamp(e) } className="form-control" type="text" placeholder="Timestamp"/> <br/>
          <button onClick={ () => this.submitComment() } className="btn btn-info">Submit Comment</button>
        </div>
      </div> 
    )
  }
}
