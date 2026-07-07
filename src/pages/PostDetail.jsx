import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const PostDetail = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  const { id } = params;
  const getPostDetail = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/posts/${id}`);
      const json_res = await res.json();
      setPost(json_res);
      console.log(res, "res");
    } catch (error) {
      console.error("error fetching post detail", error);
    }
  };
  useEffect(() => {
    if (!id) return;
    getPostDetail();
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
          <p>{post.body}</p>
          
    </div>
  );
};

export default PostDetail;
