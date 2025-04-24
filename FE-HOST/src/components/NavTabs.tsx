import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NavTabs = () => {
  const { pathname } = useLocation();

  return (
    <Nav
      className="d-flex align-items-center justify-content-center border-bottom"
      variant="underline"
      activeKey={pathname}
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/" eventKey="/">
          Início
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/creditos/garantias-e-avales"
          eventKey="/creditos/garantias-e-avales"
        >
          Garantias e Avales
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to="/creditos/doc-importacao"
          eventKey="/creditos/doc-importacao"
        >
          Créditos Doc. Importação
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavTabs;
