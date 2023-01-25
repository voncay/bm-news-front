import './App.css';
import axios from 'axios'
import { useEffect } from 'react'

function App() {

  useEffect( () => {
    axios.get('http://localhost:8000/api/articles')
    .then(res => {
        console.log(res, "response from App")
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>BM NEWS</h1>
    </div>
  );
}

export default App;
