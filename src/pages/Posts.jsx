import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const getAllPosts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/posts`);
      const json_res = await res.json();
      console.log(json_res, "json_res");
      setPosts(json_res.posts);
    } catch (error) {
      console.error("error fetching post detail", error);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const handlePost = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div>
      {posts.map((po) => (
        <button onClick={() => handlePost(po.id)}>{po.title}</button>
      ))}
      <Outlet />
    </div>
  );
};

export default Posts;
