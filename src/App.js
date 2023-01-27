// import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import News from './components/News';
import Article from './components/Article'

import Footer from './components/Footer';

function App() {

  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = async () => {
    await axios.get('http://localhost:8000/api/articles')
    .then(res => {
        setNewsData(res.data)
        console.log(res.data, "newsData from fetch in App")
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchNewsData();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<News newsData={newsData}/>} />
        <Route path="/article/:articleID" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
