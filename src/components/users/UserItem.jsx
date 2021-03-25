import React from "react";

const UserItem = ({ user }) => {
  const { avatar_url, login, html_url } = user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: 60 }}
      />
      <h3>{login}</h3>
      <div>
        <a
          href={html_url}
          className="btn btn-dark btn-sm my-1"
          target="_blank"
          rel="noreferrer"
        >
          More
        </a>
      </div>
    </div>
  );
};

export default UserItem;
