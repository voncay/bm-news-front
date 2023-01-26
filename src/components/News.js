import "../App.css"
import AddComment from './AddComment'
import { useState, useEffect } from 'react'
import axios from 'axios'

const News = ({ newsData}) =>{

  // console.log(newsData, "newsData from News")

  const [commentsData, setCommentsData] = useState([]);

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

  return (
    <div className="news">
      <ul style={{listStyleType: 'none'}}>
        { newsData.map((article, index) => {
            return (
              <li key={article._id}>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
                <div>
                  <h4>Comments</h4>
                  { commentsData.filter(comment =>  comment.articleId && comment.articleId._id === article._id).map((el, i) => {
                    return(
                      <div key={el._id}>
                        <p><b>{el.author_name}</b></p>
                        <p><em>{el.text}</em></p>
                      </div>
                    )
                  })}
                < AddComment articleId={article._id}/>
                </div>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default News;
