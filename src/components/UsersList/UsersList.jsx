import React, { useEffect, useState } from "react";

import { getUsers } from "../../usersAPI";
import UserCard from "../UserCard/UserCard";
import css from "../UsersList/UserList.module.css";
const UserList = () => {
  const usersPerPage = 3;

  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);

  useEffect(() => {
    const fetchsUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
        setDisplayedUsers(data.slice(0, usersPerPage));
      } catch (error) {
        console.error(error);
      }
    };
    fetchsUsers();
  }, []);

  const handleLoadMore = () => {
    const currentIndex = displayedUsers.length;
    const newDisplayedUsers = users.slice(0, currentIndex + usersPerPage);
    setDisplayedUsers(newDisplayedUsers);
  };

  return (
    <>
      <ul>
        {displayedUsers.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </ul>
      {displayedUsers.length < users.length && (
        <button className={css["load-more"]} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default UserList;
