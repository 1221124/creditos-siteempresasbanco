import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

interface NavTabsProps {
  tabs: { label: string; path: string }[];
  align?: "start" | "center" | "end";
  topLevel?: boolean;
}

const NavTabs: React.FC<NavTabsProps> = ({
  tabs,
  align = "center",
  topLevel = false,
}) => {
  const { pathname } = useLocation();

  //tratamento do caso específico da tab "Garantias e Avales": qualquer que seja a subtab, Garantias e Avales também deve ser ativa
  const activeKey =
    topLevel && pathname.includes("/documentos")
      ? "/creditos/garantias-e-avales"
      : pathname;

  return (
    <Nav
      className={`d-flex align-items-center justify-content-${align} border-bottom my-2`}
      variant="underline"
      activeKey={activeKey}
    >
      {tabs.map((tab) => (
        <Nav.Item key={tab.path}>
          <Nav.Link as={Link} to={tab.path} eventKey={tab.path}>
            {tab.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default NavTabs;
