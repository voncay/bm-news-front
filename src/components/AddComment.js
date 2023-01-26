
// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const AddComment = ({ articleId }) => {

  console.log(articleId, "articleId")

  // const navigate = useNavigate()

  const [comment, setComment] = useState('')
  const [name, setName] = useState('')
  const [commentId, setCommentId] = useState('')

  // const body = {name, comment, articleId} // author_name, text, articleId
  // const url = `http://localhost:8000/api/articles/${articleId}`

  const postComment = async () => {
    await axios.post(`http://localhost:8000/api/comments`, {
        author_name : name,
        text: comment,
        articleId: articleId
      }
    )
    .then( (req, res) => {
      console.log(res, "res axios post")
      console.log(req, "req axios post")
      setCommentId(req.data._id)  // retrieve comment id
      console.log(commentId, `commentId for ${name}`)
      // putArticle()
    })
    // .then(() => {
    //   putArticle()
    // })
    .catch(err => console.log(err), "error axios post")
  }

  const putArticle = () => {
    axios.put(`http://localhost:8000/api/articles/${articleId}`, {
      comments: commentId
    })
    .then( (req, res) => {
      console.log(res, "res axios put")
      console.log(req, "req axios put")
    })
    .then(() => {
      setCommentId('')
    })
    .catch(err => console.log(err), "error axios put")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postComment()
    // retrieveComment()
    // putArticle()
  }

  // useEffect( () => {
  //   retrieveComment()
  // }, [commentId])

  return(
    <form onSubmit={ (event) => handleSubmit(event)} className="form">
      <label>Name</label>
      <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
      <label>Comment</label>
      <input type='text' name='comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
      <button type='submit'>Add your Comment</button>
    </form>
  )
}

export default AddComment
