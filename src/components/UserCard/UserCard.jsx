import React, { useEffect, useState } from "react";
import css from "./UserCard.module.css";
import GoitLogo from "../../assets/goit-logo.svg";
import Picture from "../../assets/picture1.png";

const UserCard = ({ user }) => {
  const [followers, setFollowers] = useState(user.followers);
  const [isFollowing, setIsFollowing] = useState(false);
  useEffect(() => {
    const savedFollowers = localStorage.getItem(user.id);
    if (savedFollowers) {
      setFollowers(parseInt(savedFollowers));
      setIsFollowing(true);
    }
  }, [user.id]);
  const onFollow = ({ target }) => {
    if (!isFollowing) {
      target.textContent = "Following";
      target.style.backgroundColor = "#5CD3A8";
      setFollowers((prev) => prev + 1);
      setIsFollowing(true);
      localStorage.setItem(user.id, followers + 1);
    } else {
      target.textContent = "Follow";
      target.style.backgroundColor = "#ebd8ff";
      setFollowers((prev) => prev - 1);
      setIsFollowing(false);
      localStorage.removeItem(user.id);
    }
  };
  return (
    <li className={css.card}>
      <img className={css.logo} src={GoitLogo} alt="GoIT Logo" width={76} height={22} />
      <img className={css.picture} src={Picture} alt="picture1" />
      <div className={css.line}>
        <img className={css.avatar} src={user.avatar} alt="" width={62} height={62} />
      </div>
      <div className={css.info}>
        <p className={css["info-text"]}>
          {user.tweets.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} tweets
        </p>
        <p className={css["info-text"]}>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} followers
        </p>
      </div>
      <button
        id={user.id}
        className={isFollowing ? css["following-btn"] : css["follow-btn"]}
        onClick={onFollow}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </li>
  );
};

export default UserCard;
