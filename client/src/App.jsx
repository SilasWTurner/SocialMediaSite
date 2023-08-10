import './App.css'
import axios from "axios";
import { useEffect, useState } from 'react';
import Post from './components/Post.jsx';

function App() {

  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/posts").then((res) => {
      setListOfPosts(res.data);
    });
  }, []);

  return (
    <div className="App">
      <div className='posts'>
        {listOfPosts.map((post) => {
          console.log(post.title);
          return(<Post key={"post:" + post.id} {...{title: post.title, content: post.content, username: post.username}}/>)
        })}
      </div>
    </div>
  );
}

export default App
