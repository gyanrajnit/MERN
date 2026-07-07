import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Card from "./old/Card";
import Post from "./old/Post";
import useDebounce from "./hooks/useDebounce";
export default function Debouncing() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //   getPosts();
  // }, [query]);

  async function getPosts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/posts/search?q=${query}`,
      );
      const json_res = await response.json();
      setPosts(json_res.posts);
    } catch (error) {
      console.error(error);
    }
  }

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  // function debounce(fn, delay) {
  //   let timer;
  //   return function (...args) {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       fn(...args);
  //     }, delay);
  //     console.log(timer,"timertimer");
  //   };
  // }
  // const searchValue = debounce((text) => {
  //   console.log(text, "text");
  // }, 3000);
  // searchValue("Hi", 32, 64);

  const hookVal = useDebounce(query, 3000);

  useEffect(() => {
    getPosts();
  }, [hookVal]);

  // setInterval(() => {
  //   console.log("Hi");
  // }, 5000);

  setTimeout(() => {
    console.log("Hello");
  }, 5000);

  return (
    <div>
      <input type="text" value={query} onChange={handleQuery} />
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "5px" }}>
          <Card>
            <Post post={post} />
          </Card>
        </div>
      ))}
    </div>
  );
}
