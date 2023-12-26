import React, { useState, useEffect } from "react";
import "./chats.component.scss";
import TextInput from "../../../ui/components/controls/text-input/text-input.component";
import UserListing from "./user-listing/user-listing.component";
import ChatHeader from "./chat-header/chat-header.component";
import ChatWindow from "./chat-window/chat-window.component";

const Chats = () => {
  const [searchedText, setSearchedText] = useState("");
  const [debounceInput, setdebounceInput] = useState("");
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    const searchTextTimeout = setTimeout(() => {
      setdebounceInput(searchedText);
    }, 500);

    return () => clearTimeout(searchTextTimeout);
  }, [searchedText]);

  const searchedChanged = (value) => {
    setSearchedText(value);
  };
  return (
    <div className="chat-container p-1 ">
      <div className="header">
        <p className="">Messenger</p>
        <h2>Chat App</h2>
      </div>
      <div className="chat-card">
        <div className="search p-3">
          <TextInput
            placeholder="Search contacts"
            valueChanged={searchedChanged}
          />
        </div>
        <div className="users p-2">
          <UserListing
            searchText={debounceInput}
            setSelectedUser={setSelectedUser}
          />
        </div>
        <div className="chat-header">
          <ChatHeader userData={selectedUser} />
        </div>
        <div className="chats h-100">
          <ChatWindow userData={selectedUser} />
        </div>
      </div>
    </div>
  );
};

export default Chats;
