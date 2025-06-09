import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useHosted } from "../context/HostedContext";
import { Tab } from "../store/types";
import "../styles/NavTabs.css";

type NavTabsProps = {
  tabs: Tab[];
  tabsStyle: 1 | 2;
};

const NavTabs: React.FC<NavTabsProps> = ({ tabs, tabsStyle }) => {
  const { pathname } = useLocation();
  const { hosted } = useHosted();

  const makeFullPath = (tabPath: string, tabModule: string) =>
    hosted ? `/${tabModule}${tabPath}` : tabPath;

  const isActiveTab = (tab: Tab) =>
    tab.path === "/"
      ? pathname === `/${tab.module}` ||
        pathname === makeFullPath(tab.path, tab.module)
      : pathname.includes(makeFullPath(tab.path, tab.module));

  return (
    <Nav
      className={`d-flex align-items-center justify-content-start nav-tabs-style-${tabsStyle} my-3`}
      variant={tabsStyle === 2 ? "underline" : undefined}
    >
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.path}>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to={makeFullPath(tab.path, tab.module)}
              active={isActiveTab(tab)}
            >
              {tab.label}
            </Nav.Link>
          </Nav.Item>
          {tabsStyle === 1 && index < tabs.length - 1 && (
            <span className="nav-tabs-style-1-separator">{">"}</span>
          )}
        </React.Fragment>
      ))}
    </Nav>
  );
};

export default NavTabs;
