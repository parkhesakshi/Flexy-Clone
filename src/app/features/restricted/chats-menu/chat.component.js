import React from "react";
import "./chats.component.scss";

const Chats = () => {
  return (
    <div className="chat-container">
      <div className="header">
        <h6>Messenger</h6>
        <h2>Chat App</h2>
      </div>
      <div className="chat-card">
        <div className="search"></div>
        <div className="users"></div>
        <div className="chat-header"></div>
        <div className="chats"></div>
      </div>
    </div>
  );
};

export default Chats;
