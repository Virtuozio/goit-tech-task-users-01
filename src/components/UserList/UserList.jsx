import React, { useEffect, useState } from "react";

import { getUsers } from "../../service/usersAPI";
import UserCard from "../UserCard/UserCard";
import UserFilter from "../UserFilter/UserFilter";
import css from "./UserList.module.css";
const UserList = () => {
  const usersPerPage = 3;
  const FILTER_VALUES = {
    FOLLOW: "Follow",
    FOLLOWINGS: "Followings",
  };
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const [filter, setFilter] = useState("All");

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

  useEffect(() => {
    filterUsers();
  }, [filter]);

  const filterUsers = () => {
    let filteredUsers = users;

    if (filter === FILTER_VALUES.FOLLOW) {
      filteredUsers = users.filter((user) => !Object.keys(localStorage).includes(user.id));
    } else if (filter === FILTER_VALUES.FOLLOWINGS) {
      filteredUsers = users.filter((user) => Object.keys(localStorage).includes(user.id));
    }

    setDisplayedUsers(filteredUsers.slice(0, usersPerPage));
  };

  const handleLoadMore = () => {
    const currentIndex = displayedUsers.length;
    const newDisplayedUsers = users.slice(0, currentIndex + usersPerPage);
    setDisplayedUsers(newDisplayedUsers);
  };

  const handleFilterChange = ({ target }) => {
    target.parentNode.previousSibling.textContent = target.textContent;
    setFilter(target.textContent);
  };

  return (
    <>
      <UserFilter onChange={handleFilterChange} />
      <ul className={css["users-list"]}>
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
