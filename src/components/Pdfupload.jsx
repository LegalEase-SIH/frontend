import axios from 'axios';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';

import { BsFillCloudArrowUpFill } from "react-icons/bs";
import Loading from '../pages/Loading';
function Pdfupload({setPetitionId}) {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedPdf(file);
    };

    const handleUpload = async () => {
      const userId = getAuth().currentUser.uid;
      setIsLoading(true);
      try {
        const formData = new FormData();
        formData.append("file", selectedPdf);

        const result = await axios.post(`http://localhost:8000/api/user/${userId}/petition`, formData, {headers: {
          "Authorization": "Bearer " + localStorage.getItem("accessToken"),
        }});

        const petitionId = result.data.petitionId
        const url = result.data.url;

        localStorage.setItem("petitionId", petitionId);
        localStorage.setItem("url", url);

        setPetitionId(petitionId);

        // alert("File uploaded successfully")
      } catch(err) {
        console.log(err);
        alert("Something went wrong")
      }finally{
        setIsLoading(false);
      }
    }
  
    return (
      
        <div className="flex flex-col w-full  bg-bg-light items-center justify-center p-10 border border-slate-500">
        <h1 className="text-2xl font-bold mb-4 font-serif">Upload a PDF</h1>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        
        <button className='flex items-center border space-x-2  font-medium border-slate-500 p-3 rounded-lg' onClick={() => handleUpload() }><BsFillCloudArrowUpFill/><div>Upload PDF</div></button>
        {isLoading && <div><Loading/></div>} 
        {selectedPdf && (
          <div>
            <h2 className="text-xl font-semibold mb-2 font-serif">Selected PDF:</h2>
            <h2>{selectedPdf.name}</h2>
          </div>
        )}
        {selectedPdf && (
            <embed
              src={URL.createObjectURL(selectedPdf)}
              type="application/pdf"
              width="70%"
              height="1000px"
            />
          )}
      </div>

      
  );
}

export default Pdfupload;
