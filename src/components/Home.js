import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Rainbow from "../hoc/Rainbow";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";

function Home() {
  const [posts, setPosts] = useState({ posts: [] });
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res);
      setPosts(res.data.slice(0, 10));
    });
  }, []);

  const postsList = posts.length ? (
    posts.map((post) => {
      return (
        <div class="post card" key={post.id}>
          <img src={Pokeball} alt="A pokeball" />
          <div class="card-content">
            <Link to={"/" + post.id}>
              <span class="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">No posts yet</div>
  );

  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {postsList}
    </div>
  );
}
export default Rainbow(Home);
