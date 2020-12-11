import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Post(props) {
  const [post, setPost] = useState({
    post: null,
  });

  useEffect(() => {
    let id = props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      });
  }, []);

  const Post = post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p>{post.body}</p>
    </div>
  ) : (
    <div className="center">Loading Post...</div>
  );
  return (
    <div className="container">
      <h4>{Post}</h4>
    </div>
  );
}
