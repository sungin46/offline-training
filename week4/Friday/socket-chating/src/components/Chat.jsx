import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

const Chat = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    socket.on("message", handleSendMessage);
    return () => {
      socket.off("message", handleSendMessage);
    };
  }, []);

  const handleSendMessage = (message) => {
    setMessage((prev) => [...prev, message]);
  };

  const handleMessage = () => {
    if (inputValue.trim() !== "") {
      const currentTime = new Date().toLocaleDateString();
      socket.emit("message", {
        name: username,
        content: inputValue,
        time: currentTime,
      });
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Live Chating</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Input Username"
      />
      <h1>Chating</h1>
      <div>
        {message.map((message, index) => (
          <p key={index}>
            {message.name} : {message.content} - {message.time}
            {console.log(message.name)}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleMessage}>Send</button>
    </div>
  );
};

export default Chat;
