import React, { useState, useEffect } from "react";
import "./user-listing.component.scss";
import { getUsers } from "../../../../shared/requests/chat-http";

const UserListing = () => {
  const [users, setUsers] = React.useState([]);
  useEffect(() => {
    getChatUsers();
  });
  const getChatUsers = async () => {
    const res = await getUsers();
    if (res) {
      setUsers(res.data);
    }
  };
  return (
    <div className="user-listing overflow-auto h-100 ">
      {users.length ? (
        users.map((item, index) => (
          <div className="user-card d-flex align-items-center p-2 gap-3 pointer-event">
            <img
              width="40"
              height="40"
              src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png"
              alt="circled-user-female-skin-type-1-2--v1"
            />
            <div className="user-name">
              <p>{item.name}</p>
              <p className="opacity-50">{item.designation}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No users</p>
      )}
    </div>
  );
};

export default UserListing;
