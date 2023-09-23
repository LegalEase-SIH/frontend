import { getAuth } from "firebase/auth";
import Petitiontemplate from "../components/Petitiontemplate";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PreviousPetitions() {

  const [petitions,setPetitions]=useState([{}])
 // console.log("Petition data: ",petitions)
  const navigate=useNavigate()

  const fetchPreviousPetitions=async()=>{
    console.log("previous petitions: ")
    try{
       const userId=getAuth().currentUser.uid
       console.log("userId: ",userId)
       const res=await axios.get(`http://localhost:8000/api/user/${userId}/petition`,
       {
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        }
      }
       )
       console.log(res.data)
       setPetitions(res.data)
       
    }
    catch(err){
      console.log(err)
    }
  }

  const handleSubmit=async(petitionId)=>{
    try{
        localStorage.setItem('petitionId',petitionId)
        navigate(`/successRate`)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
      fetchPreviousPetitions()
  },[])
  return (
    <div className="pl-56 pr-24 space-y-8 bg-bg-light h-3/4">
      <h1 className="text-3xl font-bold text-bg-font underline ">
        Previous Petitions
      </h1>

     {petitions.map((petition,index)=>(
      <button onClick={()=>handleSubmit(petition._id)}>
       <Petitiontemplate petition_id={petition._id.slice(0,5)} percentage={petition.successRate}/>
       </button>
     ))}
     
      
    </div>
  );
}
