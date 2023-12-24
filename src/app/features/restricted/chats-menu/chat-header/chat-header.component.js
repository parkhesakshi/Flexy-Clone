import React from "react";
import "./chat-header.component.scss";

const ChatHeader = () => {
  return (
    <div className="chat-header d-flex align-items-center p-2 gap-3 ">
      <img
        width="40"
        height="40"
        src="https://img.icons8.com/color/48/circled-user-female-skin-type-1-2--v1.png"
        alt="circled-user-female-skin-type-1-2--v1"
      />
      <div className="user-name">
        <p className="chat-user-name ">James Johnson</p>
        <p className="opacity-50">Offline</p>
      </div>
    </div>
  );
};

export default ChatHeader;
