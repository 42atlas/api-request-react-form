import { useState, useEffect } from "react";
import NewPostForm from "./components/NewPostForm";
import NewPostList from "./components/NewPostList";
import "./styles.scss";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <div className="Instructions">
        <div className="block">
          <h1>POST request</h1>

          <br />
          <a className="link" href="https://jsonplaceholder.typicode.com/">
            JSON Placeholder
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_json_data"
          >
            Using Fetch API
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://axios-http.com/"
          >
            Axios
          </a>
        </div>
        <div className="block">
          <NewPostForm setPosts={setPosts} />
          <NewPostList posts={posts} />
        </div>
      </div>
    </div>
  );
}
