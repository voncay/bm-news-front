import "../App.css"
import { Link } from 'react-router-dom';


const News = ({ newsData}) =>{

  // console.log(newsData, "newsData from News")

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
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                <p><em>{e.author_name}</em></p>
              </li>
            )
        })}
      </ul>
    </div>
  );
};

export default News;
