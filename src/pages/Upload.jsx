import Pdfupload from "../components/Pdfupload";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Upload() {
  return (
    <>
      <Pdfupload />
      <div className="flex justify-between pr-28 pl-28 pb-10 pt-14">
        <Link to={`/ner`}>
          <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4">
            <BsSearch size={30} />
            <h1 className="text-2xl font-bold">Named entity recognition</h1>
          </div>
        </Link>
        <Link to={`/successrate`}>
          <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4">
            <AiOutlinePercentage size={30} />
            <h1 className="text-2xl font-bold">Success Rate</h1>
          </div>
        </Link>
      </div>
    </>
  );
}
