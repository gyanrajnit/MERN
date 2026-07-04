import React from "react";

const Post = ({ post }) => {
  return (
    <div style={{ padding: "4px 8px", borderRadius: "8px" }}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {post.tags.map((tag) => (
        <a href="#" key={tag}>
          #{tag}{" "}
        </a>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>👁️ {post.views}</p>
        <div style={{ display: "flex", gap: "6px" }}>
          <p>👍{post.reactions.likes}</p>
          <p>👎{post.reactions.dislikes}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
