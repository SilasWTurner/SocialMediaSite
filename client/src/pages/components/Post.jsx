import './Post.css'
import { useNavigate } from 'react-router-dom'; 

function Post(data) {
  let navigate = useNavigate();
    return (
        <div className="post" onClick={() => {navigate(`/post/${data.id}`)}}>
          <div className="title">{data.title}</div>
          <div className="content">{data.content}</div>
          <div className="footer">{data.username}</div>
        </div>
    );
}

export default Post;