import React from "react";
import css from "../UserFilter/UserFilter.module.css";
const UserFilter = ({ onChange }) => {
  return (
    <div className={css.dropdown}>
      <button className={css.dropbtn}>Filter</button>
      <div className={css["dropdown-content"]}>
        <a onClick={onChange}>All</a>
        <a onClick={onChange}>Follow</a>
        <a onClick={onChange}>Followings</a>
      </div>
    </div>
  );
};

export default UserFilter;
