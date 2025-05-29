import React, { useState } from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import { FaFileExport } from "react-icons/fa";
import { useLabelsStore } from "utils/useLabelsStore";
import { useExcelExport } from "utils/useExcelExport";

interface ExportButtonProps {
  data: any[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
  const exportLabel = useLabelsStore((state) => state.exportLabel);
  const [showToast, setShowToast] = useState(false);
  const { exportToExcel } = useExcelExport();

  const handleExport = () => {
    exportToExcel(data);
    setShowToast(true);
  };

  return (
    <>
      <Button
        variant="light"
        className="d-flex align-items-center gap-2"
        onClick={handleExport}
      >
        <FaFileExport />
        {exportLabel}
      </Button>

      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg="success"
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
        >
          <Toast.Header closeButton>
            <strong className="me-auto">Exportação</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Exportação em Excel concluída com sucesso!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ExportButton;
