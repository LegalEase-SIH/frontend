import React, { useState, useEffect } from "react";
import axios from "axios";
import PrevSession from "../components/PrevSession";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello, how can I assist you?", sender: "bot" },
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input) return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");

    try {
      // Send the user's message to the backend for processing
      const response = await axios.post("/api/gpt", { input });

      // Add the AI's response to the chat
      setMessages([...messages, { text: response.data, isUser: false }]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="flex justify-center bg-bg-light items-start h-screen">
      <div className=" bg-bg-light  p-4 w-1/4 ">
            <PrevSession sessionname={"session1"}/>
      </div>
      <div className=" bg-bg-light p-4 w-3/4">
        <div
          id="chat-container"
          className="bg-white rounded-lg shadow-lg p-4 h-96 overflow-y-auto"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${message.isUser ? "text-right" : "text-left"}`}
            >
              <div
                className={`py-2 px-3 rounded-lg inline-block break-words ${
                  message.isUser
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg  mt-3"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
