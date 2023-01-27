import { useState } from 'react'
import axios from 'axios'

const AddComment = ({ articleId }) => {

  console.log(articleId, "articleId")

  const [comment, setComment] = useState('')
  const [name, setName] = useState('')

  const postComment = async () => {
    await axios.post(`http://localhost:8000/api/comments`, {
        author_name : name,
        text: comment,
        articleId: articleId
      }
    )
    .then( (req, res) => {
      let commentId = ''
      console.log(req, "req axios post")
      commentId = req.data._id  // retrieve comment id
      console.log(commentId, `commentId for ${name}`)
      updateArticle(commentId)
    })
    .catch(err => console.log(err))
  }

  const updateArticle = async (commentId) => {
    await axios.get(`http://localhost:8000/api/articles/${articleId}`)
    .then(response => {
      let article = response.data;
      console.log(response.data, "article response.data")
      // Add the comment id to the comments array
      article.comments.push(commentId);
      console.log(article, "article after push commentId")
      // Update the article object on the server
      axios.put(`http://localhost:8000/api/articles/${articleId}`, article)
        .then((req, res) => {
          // console.log(res.data);
          console.log(req, "req put");
          console.log(article, "article after put")
        })
        .catch(err => {console.log(err);})
      })
      .catch(err => {console.log(err);}
    );
  }

  const getArticle = async () => {
    await axios.get(`http://localhost:8000/api/articles/${articleId}`)
    .then(response => {
      let article = response.data;
      console.log(article, "article from getArticle")
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postComment()
  }

  const handleButton = (event) => {
    event.preventDefault()
    getArticle()
  }

  return(
    <>
      <form onSubmit={ (event) => handleSubmit(event)} className="form">
        <label>Name</label>
        <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Comment</label>
        <input type='text' name='comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button type='submit'>Add your Comment</button>
      </form>
      <button onClick={ (event) => handleButton(event)}>Verify article</button>
    </>
  )
}

export default AddComment
