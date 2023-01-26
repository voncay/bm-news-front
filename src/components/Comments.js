// import axios from 'axios'

// const Comments = () => {


//   const [commentsData, setCommentsData] = useState([]);

//   const fetchCommentsData = async () => {
//     await axios.get(`http://localhost:8000/api/articles/${articleID}`)
//     .then(res => {
//         setCommentsData(res.data.comments)
//         // console.log(res.data, "commentsData from fetch in App")
//     })
//     .catch(err => console.log(err))
//   }

//   useEffect(() => {
//     fetchCommentsData();
//   }, [])


//     return(
//         <></>
//     )
// }

// export default Comments