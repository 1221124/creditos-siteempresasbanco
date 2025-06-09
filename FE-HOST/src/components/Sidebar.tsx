import React from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column align-items-center py-3 border-end"
      style={{ minWidth: "4rem", height: "85vh" }}
    >
      <Nav className="flex-column gap-4 w-100 align-items-center">
        <Nav.Item
          onClick={() => navigate("/dashboard")}
          style={{ cursor: "pointer" }}
          title="Dashboard"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrezqcO2ovuXx11B-3Uzx1F9IyTrYvOF0oA&s"
            alt="Home"
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
        </Nav.Item>

        <Nav.Item
          onClick={() => navigate("/creditos")}
          style={{ cursor: "pointer" }}
          title="Créditos"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGkg2DMYr-URcz0jmuwBfTF8XOw2i6sYI8g&s"
            alt="Créditos"
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
