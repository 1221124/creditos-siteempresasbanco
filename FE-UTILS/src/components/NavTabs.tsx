import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useHosted } from "../context/HostedContext";
import { Tab } from "../store/types";

type NavTabsProps = {
  tabs: Tab[];
  align?: "start" | "center" | "end";
};

const NavTabs: React.FC<NavTabsProps> = ({ tabs, align = "center" }) => {
  const { pathname } = useLocation();
  const { hosted } = useHosted();

  const makeFullPath = (path: string, module: string) =>
    hosted ? `/${module}${path}` : path;

  return (
    <Nav
      className={`d-flex align-items-center justify-content-${align} border-bottom my-2`}
      variant="underline"
    >
      {tabs.map((tab) => (
        <Nav.Item key={tab.path}>
          <Nav.Link
            as={Link}
            to={makeFullPath(tab.path, tab.module)}
            active={pathname.includes(makeFullPath(tab.path, tab.module))}
          >
            {tab.label}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default NavTabs;
