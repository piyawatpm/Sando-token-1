import React, { Component, useState } from "react";
import MainLayout from "src/layout/MainLayout";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
//import { Worker } from "@react-pdf-viewer/core";

// Import the main component
//import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
//import "@react-pdf-viewer/core/lib/styles/index.css";

//mport dynamic from 'next/dynamic';

//const FileViewer = dynamic(() => import('react-file-viewer'), {
// ssr: false
//});
function Whitepaper(): JSX.Element {



  //const [numPage, setNumPages] = useState(null);
 // const [pageNumber, setPageNumber] = useState(1);

  //function onDocumentLoadSuccess({numPages}){
 //   setNumPages(numPage);
 //   setPageNumber(1);
//  }
  
  return (
    <>
      {/* 
    <Document file="./pdf/Sando-Token.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      <Page  pageNumber={pageNumber} />
    </Document>
    
<div className="h-screen">
<FileViewer fileType="pdf" filePath="./pdf/Sando-Token.pdf" />

</div>

 
      <div className="h-screen">

 
  
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
     

        <Viewer fileUrl="./pdf/Sando-Token.pdf"  theme={{
        theme: 'dark',
    }}/>;
</Worker>
      </div>
 
      <div className="h-screen">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
<<<<<<< HEAD
          <Viewer
            fileUrl="./pdf/Sando-Token.pdf"
            theme={{
              theme: "dark",
            }}
          />
          ;
        </Worker>
      </div>
      


       Whitepaper 
       <div className="h-screen">

 
  
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
     

        <Viewer fileUrl="./pdf/Sando-Token.pdf"  theme={{
=======
        <Viewer fileUrl="../pdf/Sando-Token.pdf"  theme={{
>>>>>>> eebf6792e3ebfe064228226e3a2ed8211763e61a
        theme: 'dark',
    }}/>;
</Worker>
      </div>
       */}
 
    </>
  );
}

Whitepaper.layoutProps = {
  Layout: MainLayout,
};

export default Whitepaper;
