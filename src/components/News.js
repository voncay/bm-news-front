import "../App.css"
import { Link } from 'react-router-dom';


const News = ({ newsData}) =>{

  console.log(newsData, "newsData from News")

  const hideNews = (string) => {
    const element = document.getElementById(string);
    element.style.display = "none";
  };

  return (
    <div className="news">
      <ul style={{listStyleType: 'none'}}>
        { newsData.map((e, index) => {
            return (
              <li key={e._id}>
                <h4>{e.author_name}</h4>
                <p>{e.text}</p>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default News;
