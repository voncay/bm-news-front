import "../App.css"
import Moment from 'react-moment'
import { Link, Outlet } from 'react-router-dom';

const News = ({ newsData}) =>{

  // console.log(newsData, "newsData from News")

  return (
    <>
    <div className="news">
      <ul style={{listStyleType: 'none'}}>
        { newsData.map((article, index) => {
          return (
            <li key={article._id}>
              <p>
                <Link to={`/article/${article._id}`} state={{ article }}><b>{article.title}</b></Link>
              </p>
              <p>
                {article.author_name}{' '}
                <Moment fromNow>{article.date}</Moment>{' '}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
    </>
  );
};

export default News;
