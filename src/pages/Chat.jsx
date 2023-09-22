import React, { useState, useEffect } from "react";
import axios from "axios";
import PrevSession from "../components/PrevSession";
import { getAuth } from "firebase/auth";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Chat = () => {
  const [input, setInput] = useState("");
  // const [sessionId, setSessionId] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello, how can I assist you?", sender: "bot" },
  ]);
  const [userSessions, setUserSessions] = useState([
    {
      _id: "",
      sessionName: "",
    },
  ]);

  let { userId } = useParams();

  // let latestSessionId;
  const displayname = localStorage.getItem("name");
  const userPhotoUrl = localStorage.getItem("photoUrl");
  let sessionId = localStorage.getItem("sessionId");

  console.log(sessionId);

  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionId = localStorage.getItem("sessionId");

    try {
      const ques = {
        userId: userId,
        question: input,
      };
      // console.log("Session-Id: ", sessionId);

      // putting the user question into the database
      const res = await axios.put(
        `http://localhost:8000/api/session/${sessionId}`,
        ques,
        {
          headers:{
            "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          }
        }
      );
      // console.log(res);

      // fetching the user chats from the database
      const res1 = await axios.get(
        `http://localhost:8000/api/session/${sessionId}`,
        {
          headers:{
            "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          }
        }
      );
      // console.log("current session: ", res1.data.chats);
      setMessages(res1.data.chats);
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };

  const getSessionQuestionAnswers = async () => {
    // let sessionId=localStorage.getItem('sessionId')
    try {
      const res = await axios.get(
        `http://localhost:8000/api/session/${sessionId}`,
        {
          headers:{
            "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          }
        }
      );
      // console.log("current session: ", res.data.chats);
      setMessages(res.data.chats);
    } catch (err) {
      console.log(err);
    }
  };

  const createNewSession = async () => {
    const newSession = {
      userId: getAuth().currentUser.uid,
      sessionName: "New session created",
    };

    const res = await axios.post(
      "http://localhost:8000/api/session",
      newSession,
      {
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        }
      }
    );
    // console.log("Create new session clicked")
    // console.log(res);
  };

  const getUserSession = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/session/user/${userId}`,
        {
          headers:{
            "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          }
        }
      );
      // console.log("Length of user sessions: ",res.data.length)
      // console.log("User sessions: ",res.data.slice(-6))
      const prevUserSessions = res.data.slice(-6);
      prevUserSessions.reverse();
      setUserSessions(prevUserSessions);
      // console.log("userSessions: ", userSessions);
      const latestSessionId = res.data[res.data.length - 1]._id;
      // setSessionId(latestSessionId);
      localStorage.setItem("sessionId", latestSessionId);
      // console.log("Session-Id: ",latestSessionId)
    } catch (err) {
      console.log(err);
    }
  };

  const handleSessionClick = async (sessionId) => {
    localStorage.setItem("sessionId", sessionId);

    try {
      const res = await axios.get(
        `http://localhost:8000/api/session/${sessionId}`,
        {
          headers:{
            "Authorization": "Bearer " + localStorage.getItem("accessToken"),
          }
        }
      );
      // console.log("current session: ", res.data.chats);
      setMessages(res.data.chats);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // creating a new chat session
    // createNewSession();
    getUserSession();
    getSessionQuestionAnswers();
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat when new messages are added
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="bg-bg-light">
      <h1 className="pl-24 text-3xl mb-6 mt-6 font-serif font-semibold">
        Welcome {displayname}
      </h1>

      <div className="flex justify-center bg-bg-light  h-0.9">
        <div className="bg-bg-font">
          <div className="flex flex-col p-8 space-y-5 ">
            <button
              className="border border-slate-400 p-2 text-white rounded-lg"
              onClick={createNewSession}
            >
              New Chat
            </button>
            {userSessions.map((userSession, index) => (
              <button onClick={() => handleSessionClick(userSession._id)}>
                <PrevSession
                  sessionname={userSession.sessionName}
                  sessionId={userSession._id}
                />
              </button>
            ))}
          </div>
        </div>

        <div className=" bg-bg-box p-4 w-3/4">
          <div
            id="chat-container"
            className="bg-white rounded-lg shadow-lg p-4 h-96 overflow-y-auto"
          >
            {messages.map((message, index) => (
              <div key={index} className={`flex flex-col `}>
                <div className="flex flex-col mb-1 ">
                  <div
                    className={`flex py-2 px-3 rounded-lg space-x-4  text-white justify-end  text-right bg-blue-800 `}
                  >
                    <div>{message.userQuestion}</div>

                    <img
                      src={userPhotoUrl}
                      alt="pfp"
                      className="w-6 h-6 rounded-lg "
                    />
                  </div>
                  <h1 className="flex justify-end h-4 text-xs">time</h1>
                </div>

                <div
                  className={`py-2 px-3 rounded-lg text-white flex  text-left bg-gray-500 mt-1 mb-2`}
                >
                  {message.reply}
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
    </div>
  );
};

export default Chat;
