// Write your code here
import './index.css'

const CommentItem = props => {
  const {details, deleteId} = props
  const {name, comment, id, isliked,bgclassName, date} = details

  const islikedclass={isliked? "like":"liked"}
  const url=isliked?"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
  const likealt=isliked?"Like":"Liked"
  const ondelete=()=>{
    deleteId(id)
  }

  return (   

    <li className="details">
      <div className="bg_container">
        <p className={bgclassName}>{name[0].toUpperCase()}</p>
        <div className="details">
          <div className="name">
            <h1>{name}</h1>
            <p>{date}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="bg_container">
        <img src={url} alt={likealt} className={isliked}/>
        <p className={isliked}>Like</p>
        <button type="button" className="button1" onClick={ondelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
