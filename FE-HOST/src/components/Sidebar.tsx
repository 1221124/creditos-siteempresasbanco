import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useLabelsStore } from "utils/useLabelsStore";
import "../styles/Sidebar.css";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const homeLabel = useLabelsStore((state) => state.homeLabel);
  const creditosLabel = useLabelsStore((state) => state.creditosLabel);

  const [hovered, setHovered] = useState(false);

  const renderTooltip = (msg: string) => (
    <Tooltip id={`tooltip-${msg.replace(/\s/g, "").toLowerCase()}`}>
      {msg}
    </Tooltip>
  );

  return (
    <>
      {hovered && (
        <div className="overlay-opacity" onClick={() => setHovered(false)} />
      )}

      <div
        className={`sidebar-wrapper ${hovered ? "sidebar-expanded" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Nav className="flex-column gap-4 w-100 align-items-center py-3 border-end sidebar">
          <OverlayTrigger
            placement="right"
            overlay={renderTooltip(homeLabel)}
            delay={{ show: 250, hide: 400 }}
          >
            <Nav.Item
              onClick={() => navigate("/dashboard")}
              className="sidebar-item"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrezqcO2ovuXx11B-3Uzx1F9IyTrYvOF0oA&s"
                alt={homeLabel}
              />
            </Nav.Item>
          </OverlayTrigger>

          <OverlayTrigger
            placement="right"
            overlay={renderTooltip(creditosLabel)}
            delay={{ show: 250, hide: 400 }}
          >
            <Nav.Item
              onClick={() => navigate("/creditos")}
              className="sidebar-item"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGkg2DMYr-URcz0jmuwBfTF8XOw2i6sYI8g&s"
                alt={creditosLabel}
              />
            </Nav.Item>
          </OverlayTrigger>
        </Nav>
      </div>
    </>
  );
};

export default Sidebar;
