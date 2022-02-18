import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";

import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("okay >>", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat_headerInfo">
          <h3>room name</h3>
          <p>last seen at ...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">user1</span>
          hello
          <span className="chat__timestamp">at 14:32</span>
        </div>

        <div className="chat__message">hello</div>
      </div>
      <div className="chat__footer">
        <EmojiEmotionsIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type a message..."
          />
          <button onClick={sendMessage} type="submit">
            send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
