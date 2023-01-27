import AddComment from './AddComment'
import axios from 'axios'

import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Article = () => {

  let location = useLocation()
  const article = location.state.article
  const [commentsData, setCommentsData] = useState([]);

  // // debbug
  // console.log(location, "location from Article.js")
  // console.log(article, "article from Article.js")
  // console.log(commentsData, "commentsData from Article.js")

  const fetchCommentsData = async () => {
    await axios.get('http://localhost:8000/api/comments')
    .then(res => {
      setCommentsData(res.data)
      console.log(res.data, "commentsData from fetch in App")
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchCommentsData();
  }, [])
 
  return(
    <>
      <div className='article'>
        <h2>{article.title}</h2>
        <p>{article.text}</p>
      </div>
      <div className='comments'>
        <h3>Comments</h3>
        <AddComment articleId={article._id}/>
        { commentsData
          .filter(comment =>  comment.articleId && comment.articleId._id === article._id)
          .map((comment, i) => {
            return(
              <div key={comment._id}>
                <p><b>{comment.author_name}</b></p>
                <p><em>{comment.text}</em></p>
              </div>
            )
        })}
      </div>
    </>
  )
}

export default Article
