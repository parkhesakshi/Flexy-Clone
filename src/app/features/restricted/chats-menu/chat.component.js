import React from "react";
import "./chats.component.scss";
import TextInput from "../../../ui/components/controls/text-input/text-input.component";

const Chats = () => {
  return (
    <div className="chat-container">
      <div className="header">
        <p className="">Messenger</p>
        <h2>Chat App</h2>
      </div>
      <div className="chat-card">
        <div className="search">
          <TextInput placeholder='Search contacts'/>
        </div>
        <div className="users"></div>
        <div className="chat-header"></div>
        <div className="chats"></div>
      </div>
    </div>
  );
};

export default Chats;
