import { useState } from "react";
import { BiEditAlt,BiCheck } from "react-icons/bi";

export default function PrevSession({ sessionname }) {
  const [editMode, setEditMode] = useState(false);
  const [sname, setSessionname] = useState('Your Initial Text');
  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleContentChange = (e) => {
    setSessionname(e.target.textContent);
  };
  return (
    <div className="flex justify-between space-x-4 rounded-lg   border border-slate-500 h-10 p-3 items-center">
      <h1 className="text-lg font-semibold text-white rounded-lg" contentEditable={editMode} onInput={handleContentChange}>
        {sessionname} 
        </h1>
        {editMode ? (
        <BiCheck size={20} className="text-white" onClick={handleEditClick} />
      ) : (
        <BiEditAlt size={20} className="text-white" onClick={handleEditClick} />
      )}
      
    </div>
  );
}
