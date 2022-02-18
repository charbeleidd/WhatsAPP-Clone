import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const CreateChat = () => {
    const roomName = prompt("please enter name for chat");

    if (roomName) {
      //do something database
    }
  };

  return !addNewChat ? (
    <div className="SidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="SidebarChat__info">
        <h2>Room</h2>
        <p>loading chat...</p>
      </div>
    </div>
  ) : (
    <div onClick={CreateChat} className="SidebarChat">
      <h2>Add chat</h2>
    </div>
  );
}

export default SidebarChat;
