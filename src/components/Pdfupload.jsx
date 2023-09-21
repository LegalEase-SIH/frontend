import React, { useState } from 'react';

function Pdfupload() {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedPdf(file);
    };
  
    return (
      <div className="flex flex-col w-full items-center justify-center p-10">
        <h1 className="text-2xl font-bold mb-4 font-serif">Upload a PDF</h1>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mb-4"
        />
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
