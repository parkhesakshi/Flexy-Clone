import React, { useState, useEffect } from "react";
import "./user-listing.component.scss";
import { getUsers } from "../../../../shared/requests/chat-http";

const UserListing = ({ searchText, setSelectedUser }) => {
  const [activeUserId, setActiveUserId] = useState(null);
  const [userFilter, setUserFilter] = useState(null);
  const [users, setUsers] = React.useState([]);
  const handleChatClick = (userId) => {
    setActiveUserId(userId);
  };

  useEffect(() => {
    getChatUsers();
  }, [searchText]);

  const getChatUsers = async () => {
    if (!!searchText) {
      setUserFilter(`q=${searchText}`);
    } else setUserFilter(null);

    getUsers(userFilter)
      .then((response) => {
        if (response) {
          setUsers(response);
          setActiveUserId(response[0]?.id);
          setSelectedUser(response[0]);
        }
      })
      .catch((err) => console.log(err));
  };

  const onUserClick = (userData) => {
    setSelectedUser(userData);
    setActiveUserId(userData.id);
  };

  return (
    <div className="user-listing overflow-auto h-100 ">
      {users.length ? (
        users.map((item, index) => (
          <div
            className={`user-card d-flex align-items-center p-2 gap-3 pointer-event ${
              activeUserId === item.id && "chat-active"
            }`}
            key={index}
            onClick={() => onUserClick(item)}
          >
            <img
              width="40"
              height="40"
              src={item.profile_pic}
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
