import MainLayout from "src/layout/MainLayout";

import { Worker } from '@react-pdf-viewer/core';



// Import the main component
import { Viewer } from "@react-pdf-viewer/core";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

function Whitepaper(): JSX.Element {
  return (
    <>
      <div className="h-screen">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
        <Viewer fileUrl="../pdf/Sando-Token.pdf"  theme={{
        theme: 'dark',
    }}/>;
</Worker>
      </div>
    </>
  );
}

Whitepaper.layoutProps = {
  Layout: MainLayout,
};

export default Whitepaper;
