import axios from 'axios';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';

function Pdfupload() {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedPdf(file);
    };

    const handleUpload = async () => {
      const userId = getAuth().currentUser.uid;
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

        alert("File uploaded successfully")
      } catch(err) {
        console.log(err);
        alert("Something went wrong")
      }
    }
  
    return (
      <div className="flex flex-col w-full items-center justify-center p-10">
        <h1 className="text-2xl font-bold mb-4 font-serif">Upload a PDF</h1>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button onClick={() => handleUpload()}>Upload PDF</button>
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
