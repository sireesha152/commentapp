import {Component} from 'react'
import {v4} from 'uuvid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentList: []}

  onDelete = id => {
    const {commentList} = this.state
    const undeletedList = commentList.filter(eachItem => eachItem.id !== id)
    this.setState({commentList: undeletedList})
  }

  toggleIsLiked=id=>{
    const {id}=this.props
    this.setState(prevState=>({
      commentList:prevState.commentList.map(eachItem=>({
        if(id===eachItem.id) {
          return {...eachItem, isliked: !eachItem.isliked}
        }
        return eachItem
      }))
    }))
  }

renderlike=()=>{
  const {commentList}=this.state
  return commentList.map(eachItem => (
                <CommentItem
                   key={eachItem.id}                  
                  details={eachItem}
                 toggleIsLiked={this.toggleIsLiked}
                  deleteId={this.onDelete}
                />
              ))
            
}

  addClicked = (event) => {
    event.preventDefault()
    const {name,comment}=this.state
    const initialbgclassName=initialContainerBackgroundClassNames[
      Math.ceil(Math.random()*initialContainerBackgroundClassNames.length-1)
    ]
    const newComment={
      id:v4(),
      name:name,
      comment:comment,
      date:new Date(),
      isliked:false,
      bgclassName:initialbgclassName
    }
    this.setState(prevState=>({commentList:[...prevState.commentsList,newComment],
    name:"",
    comment:""
    })
    )
  }

  onChangenameInput = event => {
    event.preventDefault()
    this.setState({name: event.target.value})
  }

  commentInput = event => {
    event.preventDefault()
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentList} = this.state

    return (
      <div className="amber">
        <div className="blue">
          <div className="orange">
            <div className="emerald">
              <h1>Comments</h1>
              <form className="form" onSubmit={this.addClicked}>
                <p>Say something about 4.0 Technologies</p>
                <input
                  type="input-text"
                  placeholder="Your Name"
                  value={name}
                  onChange={this.onChangenameInput}
                />
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="Your comment"
                  value={comment}
                  onChange={this.commentInput}
                />
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="image"
              />
            </div>
          </div>
          <hr className="line" />
          <div className="blue">
            <div>
              <p className="count">{commentList.length}</p>
              <h1 className="head">Comments</h1>
            </div>
            <ul>
         {this.renderlike}
</ul>
          </div>

        </div>
      </div>
    )
  }
}
export default Comments
