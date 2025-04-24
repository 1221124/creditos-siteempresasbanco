const PdfPreview = ({ fileUrl }: { fileUrl: string }) => {
  return (
    // <PDFViewer
    //   document={{
    //     url: fileUrl,
    //   }}
    // />
    <div>{fileUrl}</div>
  );
};

export default PdfPreview;
