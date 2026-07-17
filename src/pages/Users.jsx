import React, { useEffect, useState } from "react";

const Users = () => {
  const [usersList, setUsersList] = useState([]);
  const fetchUsersList = async () => {
    try {
      const res = await fetch("http://localhost:8083/api/v1/users");
      const res_json = await res.json();
      setUsersList(res_json.data);
      //   console.log(res, "resres");
    } catch (error) {
      console.error("Error fetching the users list");
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);
  console.log(usersList, "usersList");

  return (
    <div>
      {usersList.map((user) => (
        <h1>{user.name}</h1>
      ))}
    </div>
  );
};

export default Users;
