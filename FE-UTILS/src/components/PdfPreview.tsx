import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

const PdfPreview = ({ fileUrl }: { fileUrl: string }) => {
  return (
    <Document
      file={fileUrl}
      className="d-flex justify-content-center align-items-center"
    >
      <Page
        pageNumber={1}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        scale={0.85}
      />
    </Document>
  );
};

export default PdfPreview;
