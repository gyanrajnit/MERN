// // // import React, { Fragment, useEffect, useState } from "react";
// // // import reactLogo from "./assets/react.svg";
// // // import viteLogo from "./assets/vite.svg";
// // // import heroImg from "./assets/hero.png";
// // // import "./App.css";
// // // import Sidebar, { Footer, Header } from "./Header";
// // // import MainContent from "./Class";
// // // import User from "./User";
// // // import Card from "./Card";
// // // import Post from "./Post";

import { useReducer } from "react";

// // // function App() {
// // //   // const [usersList, setUsersList] = useState([]);
// // //   const [posts, setPosts] = useState([]);
// // //   const [title, setTitle] = useState("");
// // //   const [description, setDescription] = useState("");
// // //   const [count, setCount] = useState(0);
// // //   const [theme, setTheme] = useState("light");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [isAuthenticated, setIsAuthenticated] = useState(
// // //     localStorage.getItem("isAuthenticated"),
// // //   );

// // //   useEffect(() => {
// // //     getPosts();
// // //     // getUserList();
// // //   }, []);

// // //   // async function getUserList() {
// // //   //   try {
// // //   //     const response = await fetch("https://dummyjson.com/users");
// // //   //     const json_res = await response.json();
// // //   //     console.log(json_res, "json_res");
// // //   //     setUsersList(json_res.users);
// // //   //   } catch (error) {
// // //   //     console.error(error, "error calling the user list");
// // //   //   }
// // //   // }
// // //   async function getPosts() {
// // //     try {
// // //       const response = await fetch("https://dummyjson.com/posts");
// // //       const json_res = await response.json();
// // //       setPosts(json_res.posts);
// // //     } catch (error) {
// // //       console.error(error, "error calling the user list");
// // //     }
// // //   }
// // //   async function postNewPost() {
// // //     try {
// // //       const response = await fetch("https://dummyjson.com/posts/add", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({
// // //           title,
// // //           description,
// // //           userId: 100,
// // //         }),
// // //       });
// // //       console.log(response, "response");
// // //     } catch (error) {
// // //       console.error(error, "error calling the user list");
// // //     }
// // //   }

// // //   const handleDecrement = () => {
// // //     setCount((prev) => --prev);
// // //   };

// // //   const handleIncrement = () => {
// // //     setCount(count + 1);
// // //   };

// // //   const handleChangeTheme = () => {
// // //     setTheme((prev) => (prev === "light" ? "dark" : "light"));
// // //     if (theme === "dark") {
// // //       document.body.style.backgroundColor = "black";
// // //     } else {
// // //       document.body.style.backgroundColor = "white";
// // //     }
// // //   };

// // //   console.log(theme, "theme");
// // //   //Authentication: your own account
// // //   //Authorized: not authorized for some role based functionalities
// // //   const handleEmail = (e) => {
// // //     const val = e.target.value;
// // //     setEmail(val);
// // //   };

// // //   const handlePassword = (e) => {
// // //     const val = e.target.value;
// // //     setPassword(val);
// // //   };

// // //   const handleLogin = async () => {
// // //     try {
// // //       console.log({ email, password });
// // //       // api call => response
// // //       // status code of the repsonse is 200 or not
// // //       // if (status code === 200) {
// // //       //   log in the user => navigate him/her to dahsboard
// // //       localStorage.setItem("isAuthenticated", true);
// // //       setIsAuthenticated(true);
// // //       // }else {
// // //       //   show the alert => invalid credentials
// // //       // }
// // //     } catch (error) {
// // //       console.log(error, "error while logging in");
// // //     }
// // //   };

// // //   const handleLogout = async () => {
// // //     try {
// // //       console.log({ email, password });
// // //       // api call => response
// // //       // status code of the repsonse is 200 or not
// // //       // if (status code === 200) {
// // //       //   log in the user => navigate him/her to dahsboard
// // //       localStorage.removeItem("isAuthenticated");
// // //       setIsAuthenticated(false);
// // //       // }else {
// // //       //   show the alert => invalid credentials
// // //       // }
// // //     } catch (error) {
// // //       console.log(error, "error while logging in");
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       {/* <button onClick={handleDecrement}>-</button>
// // //       <p>{count}</p>
// // //       <button onClick={handleIncrement}>+</button>
// // //       <button onClick={handleChangeTheme}>Change theme to {theme}</button> */}
// // //       {isAuthenticated && <button onClick={handleLogout}>Log out</button>}
// // //       {isAuthenticated ? (
// // //         <form
// // //           action=""
// // //           style={{ marginBottom: "8px", padding: "8px" }}
// // //           onSubmit={postNewPost}
// // //         >
// // //           <label htmlFor="">Create post</label>
// // //           <input
// // //             type="text"
// // //             style={{ width: "100%", margin: "4px 0px" }}
// // //             placeholder="Title"
// // //             value={title}
// // //             onChange={(e) => {
// // //               let value = e.target.value;
// // //               setTitle(value);
// // //             }}
// // //           />
// // //           <textarea
// // //             name=""
// // //             id=""
// // //             placeholder="Description"
// // //             style={{ width: "100%", minHeight: "120px", resize: "none" }}
// // //             value={description}
// // //             onChange={(e) => {
// // //               let value = e.target.value;
// // //               setDescription(value);
// // //             }}
// // //           ></textarea>
// // //           <button type="submit">Post</button>
// // //         </form>
// // //       ) : (
// // //         <>Please login to create post</>
// // //       )}

// // //       {/* {usersList?.map((user, idx) => {
// // //         // optional chaining
// // //         let increased_age = user.age + 5;
// // //         return (
// // //           <div style={{ marginBottom: "4px" }}>
// // //             <Card>
// // //               <User
// // //                 name={`${user.firstName} ${user.lastName}`}
// // //                 age={increased_age}
// // //               />
// // //             </Card>
// // //           </div>
// // //         );
// // //       })} */}
// // //       {!isAuthenticated && (
// // //         <form action="" onSubmit={handleLogin}>
// // //           <label htmlFor="email">Email id</label>
// // //           <input type="text" id="email" value={email} onChange={handleEmail} />
// // //           <label htmlFor="password">Password</label>
// // //           <input
// // //             type="password"
// // //             id="password"
// // //             value={password}
// // //             onChange={handlePassword}
// // //           />
// // //           <button type="submit">Log in</button>
// // //         </form>
// // //       )}
// // //       <select name="" id="">
// // //         <option value="">{">"} 300</option>
// // //         <option value="">{">"} 1000</option>
// // //       </select>
// // //       {posts?.map((post, idx) => {
// // //         return (
// // //           <div style={{ marginBottom: "4px" }}>
// // //             <Card>
// // //               <Post post={post} />
// // //             </Card>
// // //           </div>
// // //         );
// // //       })}
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // // // class based components

// // import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// // import "./App.css";
// // import Card from "./Card";
// // import Post from "./Post";
// // import ScrollWrapper from "./ScrollWrapper";

// // function App() {
// //   const [posts, setPosts] = useState([]);
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [count, setCount] = useState(0);
// //   const [theme, setTheme] = useState("light");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [filtered_Posts, setFiltered_Posts] = useState([]);

// //   const inputRef = useRef(null);

// //   // NEW STATE FOR FILTER
// //   const values = [
// //     { name: 300, value: 300 },
// //     { name: 2000, value: 2000 },
// //     { name: 4000, value: 4000 },
// //   ];
// //   const comparison = [
// //     { name: "Greater than", value: ">" },
// //     { name: "Less than", value: "<" },
// //     { name: "Equal to", value: "=" },
// //   ];
// //   const [filterValue, setFilterValue] = useState(values[0]);
// //   const [condition, setCondition] = useState(">");

// //   const [isAuthenticated, setIsAuthenticated] = useState(
// //     localStorage.getItem("isAuthenticated"),
// //   );

// //   useEffect(() => {
// //     getPosts();
// //   }, []);

// //   async function getPosts() {
// //     try {
// //       const response = await fetch("https://dummyjson.com/posts");
// //       const json_res = await response.json();
// //       setPosts(json_res.posts);
// //       setFiltered_Posts(json_res.posts);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }

// //   async function postNewPost(e) {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch("https://dummyjson.com/posts/add", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           title,
// //           description,
// //           userId: 100,
// //         }),
// //       });

// //       console.log(response);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }

// //   const handleDecrement = () => {
// //     setCount((prev) => prev - 1);
// //   };

// //   const handleIncrement = () => {
// //     setCount((prev) => prev + 1);
// //   };

// //   const handleChangeTheme = () => {
// //     setTheme((prev) => (prev === "light" ? "dark" : "light"));

// //     if (theme === "dark") {
// //       document.body.style.backgroundColor = "black";
// //     } else {
// //       document.body.style.backgroundColor = "white";
// //     }
// //   };

// //   const handleEmail = (e) => {
// //     setEmail(e.target.value);
// //   };

// //   const handlePassword = (e) => {
// //     setPassword(e.target.value);
// //   };

// //   const handleLogin = (e) => {
// //     e.preventDefault();

// //     localStorage.setItem("isAuthenticated", true);
// //     setIsAuthenticated(true);
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("isAuthenticated");
// //     setIsAuthenticated(false);
// //   };

// //   const filteredPosts = () => {
// //     if (!posts || posts.length === 0) return;
// //     // writing the filtering logic
// //     const filteredPosts = posts.filter((post) => {
// //       if (condition === ">") {
// //         return post.views > filterValue;
// //       } else if (condition === "<") {
// //         return post.views < filterValue;
// //       } else {
// //         return post.views === filterValue;
// //       }
// //     });

// //     setFiltered_Posts(filteredPosts);
// //   };

// //   useEffect(() => {
// //     filteredPosts();
// //   }, [condition, filterValue]);

// //   useEffect(() => {
// //     //uncontrolled component
// //     inputRef.current.style.backgroundColor = "red";
// //     inputRef.current.focus();
// //   }, []);

// //   const refCount = useRef(0);
// //   return (
// //     <div>
// //       {/* Counter */}

// //       <button onClick={handleDecrement}>-</button>
// //       <p>{count}</p>
// //       <button onClick={handleIncrement}>+</button>

// //       <button onClick={handleChangeTheme}>Change Theme</button>
// //       <button
// //         onClick={() => {
// //           refCount.current++;
// //           console.log(refCount, "refCount");
// //         }}
// //       >
// //         Change ref count
// //       </button>
// //       {refCount.current}
// //       {isAuthenticated && <button onClick={handleLogout}>Logout</button>}

// //       {isAuthenticated ? (
// //         <form onSubmit={postNewPost}>
// //           <label>Create Post</label>

// //           <input
// //             type="text"
// //             placeholder="Title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             style={{ width: "100%", margin: "5px 0" }}
// //           />

// //           <textarea
// //             placeholder="Description"
// //             value={description}
// //             onChange={(e) => setDescription(e.target.value)}
// //             style={{
// //               width: "100%",
// //               minHeight: "120px",
// //               resize: "none",
// //             }}
// //           ></textarea>

// //           <button type="submit">Post</button>
// //         </form>
// //       ) : (
// //         <p>Please Login to Create Post</p>
// //       )}

// //       {!isAuthenticated && (
// //         <form onSubmit={handleLogin}>
// //           <label>Email</label>

// //           <input
// //             ref={inputRef}
// //             type="text"
// //             value={email}
// //             onChange={handleEmail}
// //           />
// //           <label>Password</label>
// //           <input type="password" value={password} onChange={handlePassword} />
// //           <button type="submit">Login</button>
// //         </form>
// //       )}

// //       <h3>Filter Posts By Views</h3>

// //       {/* <select
// //         value={filterValue}
// //         onChange={(e) => setFilterValue(Number(e.target.value))}
// //       >
// //         <option value={300}>less than 300</option>
// //         <option value={1000}>Greater than 1000</option>
// //       </select> */}

// //       <select value={condition} onChange={(e) => setCondition(e.target.value)}>
// //         {comparison.map((comp) => (
// //           <option value={comp.value} key={comp.value}>
// //             {comp.name}
// //           </option>
// //         ))}
// //       </select>

// //       <select
// //         value={filterValue}
// //         onChange={(e) => setFilterValue(Number(e.target.value))}
// //       >
// //         {values.map((val) => (
// //           <option value={val.value} key={val.value}>
// //             {val.name}
// //           </option>
// //         ))}
// //       </select>
// //       <ScrollWrapper>
// //         {filtered_Posts.map((post) => (
// //           <div key={post.id} style={{ marginBottom: "5px" }}>
// //             <Card>
// //               <Post post={post} />
// //             </Card>
// //           </div>
// //         ))}
// //       </ScrollWrapper>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";
// import Dashboard from "./Dashboard";
// import Header from "./Header";
// import Footer from "./Footer";

// const App = () => {
//   const [userName, setUserName] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState("");
//   const hadleLogin = () => {
//     setIsAuthenticated(true);
//   };
//   return (
//     <div>
//       {isAuthenticated ? (
//         <div style={{ display: "flex", flexDirection: "column" }}>
//           <Header userName={userName} setUserName={setUserName} />
//           <Dashboard />
//           <Footer />
//         </div>
//       ) : (
//         <form action="" onSubmit={hadleLogin}>
//           <input
//             type="text"
//             value={userName}
//             onChange={(e) => setUserName(e.target.value)}
//           />
//           <button type="submit">Sign in</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { ThemeContext } from "./ContextApi";
// import MainWebiste from "./MainWebiste";

// const App = () => {
//   const [theme, setTheme] = useState("light");
//   return (
//     <ThemeContext.Provider value={theme}>
//       <button
//         onClick={() => setTheme(() => (theme === "light" ? "dark" : "light"))}
//       >
//         Toggle Theme
//       </button>
//       <MainWebiste />
//     </ThemeContext.Provider>
//   );
// };

// export default App;

//use Reducer

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         count: state.count + 1,
//       };
//     case "decrement":
//       return {
//         count: state.count - 1,
//       };
//     case "reset":
//       return {
//         count: 0,
//       };

//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   const handleDecrement = () => {
//     dispatch({ type: "decrement" });
//   };
//   const handleIncrement = () => {
//     dispatch({ type: "increment" });
//   };
//   const handleReset = () => {
//     dispatch({ type: "reset" });
//   };
//   return (
//     <div>
//       <button onClick={handleDecrement}>-</button>
//       {state.count}
//       <button onClick={handleIncrement}>+</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default App;
