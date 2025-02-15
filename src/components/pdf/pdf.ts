// DocumentPreview.tsx
import React, { useState } from "react";
import { Document, Page, pdfjs, PDFDocumentProxy } from "react-pdf";
import { sendGTMEvent } from "@next/third-parties/google"; // Import the GTM utility

// Set the worker source for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Define props type for the component
interface DocumentPreviewProps {
  fileUrl: string; // URL of the PDF file
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ fileUrl }) => {
  // Define state type and initialize state
  const [numPages, setNumPages] = useState<number | null>(null);

  // Called when the document is successfully loaded
  const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy): void => {
    setNumPages(numPages);
  };

  // Track each page view using GTM
  const trackPageView = (pageNumber: number): void => {
    sendGTMEvent({
      event: "pdfPageView",
      pageNumber: pageNumber,
      pdfFileName: fileUrl.split("/").pop() || "Unknown PDF", // Extract file name from URL, fallback to 'Unknown PDF'
    });
    console.log(`Tracked page view: ${pageNumber}`);
  };

  return (
    <div>
      <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages || 0), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            onRenderSuccess={() => trackPageView(index + 1)}
          />
        ))}
      </Document>
    </div>
  );
};

export default DocumentPreview;
