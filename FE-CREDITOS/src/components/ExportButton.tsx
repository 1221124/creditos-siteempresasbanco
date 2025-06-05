import React, { useState } from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import { FaFileExport } from "react-icons/fa";
import { useLabelsStore } from "utils/useLabelsStore";
import { useExcelExport } from "utils/useExcelExport";

interface ExportButtonProps {
  data: any[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ data }) => {
  const {
    exportLabel,
    exportToExcelLabel,
    exportToExcelSuccessLabel,
    exportToExcelErrorLabel,
    errorOccuredLabel,
  } = useLabelsStore();

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);
  const { exportToExcel } = useExcelExport();

  const handleExport = async () => {
    try {
      await exportToExcel(data);
      setError(false);
      setShowToast(true);
    } catch (err) {
      console.error(errorOccuredLabel, err);
      setError(true);
      setShowToast(true);
    }
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
        {showToast && (
          <Toast
            bg={error ? "danger" : "success"}
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton>
              <strong className="me-auto">
                {error ? errorOccuredLabel : exportToExcelLabel}
              </strong>
            </Toast.Header>
            <Toast.Body className="text-white">
              {error ? exportToExcelErrorLabel : exportToExcelSuccessLabel}
            </Toast.Body>
          </Toast>
        )}
      </ToastContainer>
    </>
  );
};

export default ExportButton;
