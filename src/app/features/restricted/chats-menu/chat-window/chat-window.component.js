import React, { useEffect, useState } from "react";
import { getUserChats } from "../../../../shared/requests/chat-http";
import { getDataFromLocalstorage } from "../../../../shared/functions/localstorage.funtions";
import {
  ICON_LG,
  ICON_MD,
  USER_ID_KEY,
} from "../../../../shared/constants/utilities";
import TextInput from "../../../../ui/components/controls/text-input/text-input.component";
import { FiSend } from "react-icons/fi";
import "./chat-window.component.scss";

const ChatWindow = ({ userData }) => {
  const [userChatsData, setuserChatsData] = useState([]);
  const [currentUserId, seCurrentUserId] = useState(
    getDataFromLocalstorage(USER_ID_KEY)
  );
  useEffect(() => {
    getUserChatData();
    return () => {};
  }, [userData]);

  const getUserChatData = async () => {
    if (!userData.id) return;

    const filters = `user1=${currentUserId}&user2=${userData.id}`;

    getUserChats(filters)
      .then((response) => {
        if (response) {
          setuserChatsData(response);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="chat-window d-flex flex-column h-100 justify-content-between">
      <div className="chat-area overflow-auto d-flex flex-column ">
        {userChatsData &&
          userChatsData[0] &&
          userChatsData[0]?.messages?.length &&
          userChatsData[0]?.messages?.map((userChat) => (
            <div
              className={`chat p-2 d-flex gap-2 ${
                Number(currentUserId) === userChat.sender_id &&
                "justify-content-end"
              }`}
            >
              <div className="chat-content d-flex">
                {Number(currentUserId) !== userChat.sender_id && (
                  <img
                    width="50"
                    height="50"
                    src={userData.profile_pic}
                    alt="circled-user-female-skin-type-1-2--v1"
                  />
                )}
                <div
                  style={{ backgroundColor: "#e5f9fb", borderRadius: "5px" }}
                  className="p-3 w-100"
                >
                  {userChat.message}
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="chat-input d-flex align-items-center justify-content-between py-3 px-4 gap-4">
        <TextInput
          inputClass={"p-2"}
          placeholder={"Type a Message"}
          className={"w-100 !p-2"}
        />
        <div className="p-2" style={{ cursor: "pointer" }}>
          <FiSend size={ICON_MD} color="grey" />
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
