const PdfPreview = ({ fileUrl }: { fileUrl: string }) => (
  <div data-testid="pdf-preview">{fileUrl}</div>
);
export default PdfPreview;
