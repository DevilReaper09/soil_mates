// src/Chat.js
import React, { useState } from 'react';
import './Chat.css'; // Make sure to create this CSS file

function Chat() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    // Logic to send message goes here
  };

  return (
    <div className="chat">
      <div className="chat-messages">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={sendMessage}>
        <input type="text" placeholder="Type your message here..."/>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
