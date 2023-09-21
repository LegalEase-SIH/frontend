import { useEffect, useState } from "react";
import icon3 from "../assets/icon3.png";
import Footer from "./Footer";
import Header from "./Header";
import { BsUpload, BsChatDots } from "react-icons/bs";

import { GiAwareness } from "react-icons/gi";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
export default function Options() {
  const [userId,setUserId]=useState("")

  useEffect(()=>{
      setUserId(getAuth().currentUser.uid)
  },[])
  return (
    <>

      <div className="flex justify-between pr-28 pl-28 pb-10 bg-bg-light">
        <a href="/upload">
        <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4">
          <BsUpload size={30}/>
          <h1 className="text-2xl font-bold">Upload petition</h1>
        </div></a>
        <a href="/gawareness">
        <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4">
          <GiAwareness size={30}/>
          <h1 className="text-2xl font-bold">General Awareness</h1>
        </div></a>
        {/* <a href="/chat"> */}
        <Link to={`/chat/${userId}`}>
        <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4">
          <BsChatDots size={30}/>
          <h1 className="text-2xl font-bold"> New Conversation</h1>
        </div>
        </Link>
        {/* </a> */}
      </div>
      <div className="flex h-5/6 w-full bg-bg-light  justify-between p-10 pr-24">
        <img src={icon3} alt="icon3" width={900} height={900} />

        <div className=" bg-bg-box rounded-xl w-2/5 p-4">
          <h1 className="text-xl font-bold">About us</h1>
          <h2>
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
