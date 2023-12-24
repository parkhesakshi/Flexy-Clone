import React from "react";
import "./chats.component.scss";
import TextInput from "../../../ui/components/controls/text-input/text-input.component";
import UserListing from "./user-listing/user-listing.component";
import ChatHeader from "./chat-header/chat-header.component";
import ChatWindow from "./chat-window/chat-window.component";

const Chats = () => {
  return (
    <div className="chat-container">
      <div className="header">
        <p className="">Messenger</p>
        <h2>Chat App</h2>
      </div>
      <div className="chat-card">
        <div className="search">
          <TextInput placeholder="Search contacts" />
        </div>
        <div className="users p-2">
          <UserListing />
        </div>
        <div className="chat-header">
          <ChatHeader />
        </div>
        <div className="chats">
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default Chats;
