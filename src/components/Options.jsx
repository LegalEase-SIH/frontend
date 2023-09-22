import { useEffect, useState } from "react";
import graph from "../assets/graph.png";
import Footer from "./Footer";
import Header from "./Header";
import { BsUpload, BsChatDots } from "react-icons/bs";

import { GiAwareness } from "react-icons/gi";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
export default function Options() {
  const [userId, setUserId] = useState("")

  useEffect(() => {
    setUserId(getAuth().currentUser.uid)
  }, [])
  return (
    <>

      <div className="flex justify-between pr-28 pl-28 pb-14 bg-bg-light">
        <Link to={`/upload`}>
          <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4 hover:scale-105">
            <BsUpload size={30} />
            <h1 className="text-2xl font-bold font-serif">Upload petition</h1>
          </div></Link>
        <Link to={`/search`}>
          <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4 hover:scale-105">
            <GiAwareness size={30} />
            <h1 className="text-2xl font-bold font-serif">General Awareness</h1>
          </div></Link>
        {/* <a href="/chat"> */}
        <Link to={`/chat/${userId}`}>
          <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4 hover:scale-105">
            <BsChatDots size={30} />
            <h1 className="text-2xl font-bold font-serif"> New Conversation</h1>
          </div>
        </Link>
        {/* </a> */}
      </div>
      <div className="bg-bg-light flex justify-center pb-8"><img src={graph} alt="hierarchy" width={900} height={1000}/></div>
      <div className="flex h-5/6 w-full bg-bg-light  justify-between p-10 pl-24 pr-24">
        {/* <img src={icon3} alt="icon3" width={900} height={900} className="hover:scale-110"/> */}
        
        <div className=" bg-bg-box rounded-xl p-4 border-2 border-slate-600 shadow-lg shadow-black">
          <h1 className="text-xl font-bold font-serif">About us</h1>
          <h2 className="font-serif ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            id accusantium voluptatem quibusdam hic necessitatibus sequi ipsam.
            Quo aperiam tenetur maiores exercitationem et ea assumenda excepturi
            commodi eaque! Quis, sint?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laudantium id accusantium voluptatem quibusdam hic
            necessitatibus sequi ipsam. Quo aperiam tenetur maiores
            exercitationem et ea assumenda excepturi commodi eaque! Quis,
            sint?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium id accusantium voluptatem quibusdam hic necessitatibus
            sequi ipsam. Quo aperiam tenetur maiores exercitationem et ea
            assumenda excepturi commodi eaque! Quis, sint?Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Laudantium id accusantium
            voluptatem quibusdam hic necessitatibus sequi ipsam. Quo aperiam
            tenetur maiores exercitationem et ea assumenda excepturi commodi
            eaque! Quis, sint?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Laudantium id accusantium voluptatem quibusdam hic
            necessitatibus sequi ipsam. Quo aperiam tenetur maiores
            exercitationem et ea assumenda excepturi commodi eaque! Quis, sint?
          </h2>
        </div>
      </div>
      
      

    </>
  );
}
