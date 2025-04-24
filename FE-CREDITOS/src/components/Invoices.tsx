import { Offcanvas } from "react-bootstrap";
import Documents from "../screens/tabs/Documents";

interface InvoicesProps {
  data: { date: string; nome: string }[];
  show: boolean;
  setShow: (value: boolean) => void;
}

const Invoices = ({ data, show, setShow }: InvoicesProps) => {
  const handleClose = () => setShow(false);

  if (!show) return null;

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      style={{ width: window.innerWidth * 0.3 }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Faturas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Documents data={data} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Invoices;
