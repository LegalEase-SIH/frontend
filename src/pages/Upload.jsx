import Pdfupload from "../components/Pdfupload";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Upload() {
  const [petitionId, setPetitionId] = useState(localStorage.getItem('petitionId'));
  return (
    <>
      <Pdfupload setPetitionId={setPetitionId}/>
      {petitionId ? (
      
      <div className="flex justify-between pr-28 pl-28 pb-10 pt-14 bg-bg-light border border-slate-500">
        <Link to={`/ner`}>
          <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4 hover:scale-105">
            <BsSearch size={30} />
            <h1 className="text-2xl font-bold">Named entity recognition</h1>
          </div>
        </Link>
        <Link to={`/successrate`}>
          <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4 hover:scale-105">
            <AiOutlinePercentage size={30} />
            <h1 className="text-2xl font-bold">Success Rate</h1>
          </div>
        </Link>
      </div>
      ):(
        <div className="flex justify-center font-semibold text-2xl bg-bg-light h-full">
          Pdf not uploaded yet
        </div>
      )}
    </>
  );
}
