import React, { useState, useEffect } from "react";
import axios from "axios";
import PrevSession from "../components/PrevSession";
import { getAuth } from "firebase/auth";
import { useParams } from "react-router-dom";

const Chat = () => {
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState("")
  const [messages, setMessages] = useState([
    { text: "Hello, how can I assist you?", sender: "bot" },
  ]);
  
  let { userId } = useParams();
  
  // let latestSessionId;
  const displayname=localStorage.getItem('name')
  console.log("Name of the user: ",displayname)

  const userPhotoUrl=localStorage.getItem('photoUrl')
  console.log("User photo Url: ",userPhotoUrl)




  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const ques = {
        'userId': userId,
        'question': input
      }
      console.log("Session-Id: ", sessionId)

      // putting the user question into the database 
      const res = await axios.put(`http://localhost:8000/api/session/${sessionId}`, ques)
      console.log(res)

      // fetching the user chats from the database
      const res1=await axios.get(`http://localhost:8000/api/session/${sessionId}`)
      console.log("current session: ",res1.data.chats)
      setMessages(res1.data.chats)
      
    }
    catch (err) {
      console.log(err)
    }
  };

  const getSessionQuestionAnswers=async()=>{
    try{
      const res=await axios.get(`http://localhost:8000/api/session/${sessionId}`)
      console.log("current session: ",res.data.chats)
      setMessages(res.data.chats)
    }
    catch(err){
      console.log(err)
    }
  }

  const createNewSession = async () => {
    const newSession = {
      "userId": getAuth().currentUser.uid,
      "sessionName": "New session"
    }

    const res = await axios.post("http://localhost:8000/api/session", newSession)
    console.log(res)
  }


  const getUserSession = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/session/user/${userId}`)
      
      const latestSessionId = res.data[res.data.length - 1]._id
       setSessionId(latestSessionId)
      // console.log("Session-Id: ",latestSessionId)
    }
    catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    // creating a new chat session
    createNewSession()
    getUserSession()
    getSessionQuestionAnswers()


  }, [])

  useEffect(() => {

    // Scroll to the bottom of the chat when new messages are added
    const chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="flex justify-center bg-bg-light items-start h-screen">
      <div className=" bg-bg-light  p-4 w-1/4 ">
        <PrevSession sessionname={"session1"} />
      </div>
      <div className=" bg-bg-light p-4 w-3/4">
        <div
          id="chat-container"
          className="bg-white rounded-lg shadow-lg p-4 h-96 overflow-y-auto"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex flex-col mb-2`}
            >
              <div
                className={`py-2 px-3 rounded-lg inline-block break-words text-right`}
              >
                {message.userQuestion}
              </div>
              <div
                className={`py-2 px-3 rounded-lg  inline-block break-words text-left`}
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
  );
};

export default Chat;
