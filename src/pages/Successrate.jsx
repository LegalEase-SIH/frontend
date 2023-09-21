import Percentagecircle from "../components/Percentagecircle";
import { BiArrowBack} from "react-icons/bi";
import {AiOutlineHome} from "react-icons/ai"
export default function Successrate() {
  return (
    <>  
        <div className="flex justify-between pr-28 pl-28 bg-bg-light pt-10 pb-8">
            <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4">
            <BiArrowBack size={28}/>
            <h1 className="text-2xl font-bold font-serif">Back</h1>
            </div>
            <div className="border-slate-400 p-4 rounded-2xl border-4 flex justify-center items-center space-x-4">
            <AiOutlineHome size={28}/>
            <h1 className="text-2xl font-bold font-serif">Home</h1>
            </div>
        </div>
        <div className="flex flex-col justify-between pl-40 pr-40 items-center bg-bg-light h-screen pb-12 space-y-10">
            <h1 className="text-3xl font-bold text-bg-font font-serif ">
                Successrate Result
            </h1>
            <div className="flex  justify-between items-center space-x-56  ">
                <Percentagecircle percentage={90}/>
                <div  className="flex flex-col bg-bg-box p-6 rounded-lg w-2/5 ">
                    <h1 className="font-semibold">How to increase the success rate?</h1>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequatur atque velit mollitia! Culpa, natus consequatur blanditiis mollitia nobis, non dolorum laborum, quae repellendus distinctio deleniti ipsa excepturi ex possimus.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequatur atque velit mollitia! Culpa, natus consequatur blanditiis mollitia nobis, non dolorum laborum, quae repellendus distinctio deleniti ipsa excepturi ex possimus.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequatur atque velit mollitia! Culpa, natus consequatur blanditiis mollitia nobis, non dolorum laborum, quae repellendus distinctio deleniti ipsa excepturi ex possimus.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam consequatur atque velit mollitia! Culpa, natus consequatur blanditiis mollitia nobis, non dolorum laborum, quae repellendus distinctio deleniti ipsa excepturi ex possimus.</li>
                </div>
            </div>
            
        </div>
      
    </>
  );
}
