import { useEffect, useState } from "react";
import NerContainer from "../components/NerContainer";
import axios from "axios";

export default function Neroutput() {

  const [caseNumber,setCaseNumber]=useState([])
  const [court,setCourt]=useState([])
  const [date,setDate]=useState([])
  const [gpe,setGPE]=useState([])
  const [judge,setJudge]=useState([])
  const [org,setOrg]=useState([])
  const [otherPerson,setOtherPerson]=useState([])
  const [petitioner,setPetitioner]=useState([])
  const [precedent,setPrecedent]=useState([])
  const [provision,setProvision]=useState([])
  const [respodent,setRespodent]=useState([])
  const [statute,setStatute]=useState([])
  const [witness,setWitness]=useState([])

  
   
  const getNER=async()=>{
    try{
      const petitionId=localStorage.getItem("petitionId")
     // console.log(petitionId)
      
      const res=await axios.get(`http://localhost:8000/api/petition/${petitionId}/ner`)
     console.log("NER: ",res.data.petition.ner)
      const arr=res.data.petition.ner
     
      console.log("CASE: ",arr.OTHER_PERSON)
      console.log(arr.OTHER_PERSON.length)

      if(arr.CASE_NUMBER.length>0)
      {
        setCaseNumber(arr.CASE_NUMBER)
      }
      if(arr.COURT.length>0)
      {
        setCourt(arr.COURT)
      }
      if(arr.DATE.length>0)
      {
        setDate(arr.DATE)
      }
      if(arr.GPE.length>0)
      {
        setGPE(arr.GPE)
      }
      if(arr.JUDGE.length>0)
      {
        setJudge(arr.JUDGE)
      }
      if(arr.ORG.length>0)
      {
        setOrg(arr.ORG)
      }
      if(arr.OTHER_PERSON.length>0)
      {
        setOtherPerson(arr.OTHER_PERSON)
      }
      if(arr.PETITIONER.length>0)
      {
        setPetitioner(arr.PETITIONER)
      }
      if(arr.PRECEDENT.length>0)
      {
        setPrecedent(arr.PRECEDENT)
      }
      if(arr.PROVISION.length>0)
      {
        setProvision(arr.PROVISION)
      }
      if(arr.RESPONDENT.length>0)
      {
        setRespodent(arr.RESPONDENT)
      }
      if(arr.STATUTE.length>0)
      {
        setStatute(arr.STATUTE)
      }
      if(arr.WITNESS.length>0)
      {
        setWitness(arr.WITNESS)
      }


    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
     getNER()
  },[])
  return (
    <div className="pl-24 pr-24">
      <h1 className="text-3xl font-bold text-bg-font underline ">
        Named entity recognition Result
      </h1>
      <div className="flex  justify-between mt-5 mb-5">
        {witness.length !== 0 && <NerContainer
          WITNESS={witness}
        />}
        
        {otherPerson.length !== 0 && 
        
        <NerContainer
          OTHER_PERSON={otherPerson}
        />
        }

        {statute.length !== 0 && 
        <NerContainer
          STATUTE={statute}
        />
        }

        {caseNumber.length !== 0 && 
        
        <NerContainer
         CASE_NUMBER={caseNumber}
        />
        }
        {gpe.length !== 0 &&
        <NerContainer
          GPE={gpe}
        />
        }

        {
          org.length !== 0 &&
          <NerContainer
            ORG={org}
          />
        }

        {
          date.length !== 0 &&

          <NerContainer
            DATE={date}
          />
        }

        {judge.length !== 0 &&
        <NerContainer
            JUDGE={judge}
        />
        }

        {
          provision.length !== 0 &&
          <NerContainer
            PROVISION={provision}
          />
        }

        {petitioner.length !== 0 &&
        <NerContainer
          PETITIONER={petitioner}
        />
        }
        {respodent.length !== 0 && 
        <NerContainer
         RESPONDENT={respodent}
        />
        
        }
        {court.length !== 0 && 
        <NerContainer
         COURT={court}
        />
        }
        {
          precedent.length !== 0 && 
          <NerContainer
            PRECEDENT={precedent}
          />
        }
      </div>
    </div>
  );
}
