import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';

import { GrLinkNext } from "react-icons/gr";
export default function Petitiontemplate({ petition_id, percentage }) {
  return (
    <div className="flex justify-between items-center h-16 w-4/5 bg-bg-box rounded-lg p-4">
      <div className='font-sans text-xl '>
        ID: {petition_id}
      </div>
      <div className='flex space-x-8 items-center '>
        <div className="w-12 h-12">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={{
              root: { width: "100%", height: "100%" },
              path: { stroke: `#352F44`, strokeLinecap: "butt" },
              text: { fill: "#352F44", fontSize: "20px" },
            }}
          />
          <div>
          
          </div>
        </div>
        <GrLinkNext size={30} />
      </div>
    </div>
  );
}
