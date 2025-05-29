import React from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

type NavTabsProps = {
  tabs: { label: string; path: string }[];
  align?: "start" | "center" | "end";
};

const NavTabs: React.FC<NavTabsProps> = ({ tabs, align = "center" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Nav
      className={`d-flex align-items-center justify-content-${align} border-bottom my-2`}
      variant="underline"
    >
      {tabs.map((tab) => (
        <Nav.Item key={tab.path}>
          <Nav.Link
            role="button"
            active={pathname.includes(tab.path)}
            onClick={() => {
              navigate(tab.path);
            }}
          >
            {tab.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default NavTabs;
