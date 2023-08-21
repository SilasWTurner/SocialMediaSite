import axios from "axios";
import { useEffect, useState } from 'react';
import Post from './components/Post.jsx';
import "./Home.css";
import NavBar from "./components/NavBar.jsx";

function Home() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:5001/posts").then((res) => {
        setListOfPosts(res.data);
      });
    }, []);

    
  
    return (
      <div className="Home">
        <NavBar active="Home"/>
        <div className='posts'>
          {listOfPosts.map((post) => {
            return(<Post key={"post:" + post.id} {...{id:post.id, title: post.title, content: post.content, username: post.username}}/>)
          })}
        </div>
      </div>
    );
}

export default Home