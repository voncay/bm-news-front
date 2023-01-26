import "../App.css"
import AddComment from './AddComment'
// import { Link } from 'react-router-dom';

const News = ({ newsData}) =>{

  // console.log(newsData, "newsData from News")

  return (
    <div className="news">
      <ul style={{listStyleType: 'none'}}>
        { newsData.map((e, index) => {
            return (
              <li key={e._id}>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <div>
                  <h4>Comments</h4>
                  { e.comments.map((el, i) => {
                    return(
                      <div key={el._id}>
                        <p>{el.author_name}</p>
                        <p>{el.text}</p>
                      </div>
                    )
                  })}
                < AddComment articleId={e._id}/>
                </div>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default News;
