import { BiEditAlt } from "react-icons/bi";

export default function PrevSession({ sessionname }) {
  return (
    <div className="flex justify-between space-x-4 rounded-lg   border border-slate-500 h-10 p-3 items-center">
      <h1 className="text-lg font-semibold text-white    rounded-lg  ">
        {sessionname}
        </h1>
        <BiEditAlt size={20} className="text-white"/>
      
    </div>
  );
}
