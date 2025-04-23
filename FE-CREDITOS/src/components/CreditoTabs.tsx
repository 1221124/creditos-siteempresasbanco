import React from "react";
import { Row, Col } from "react-bootstrap";

interface CreditoTabsProps {
  tabs: string[];
}

const CreditoTabs: React.FC<CreditoTabsProps> = ({ tabs }) => {
  return (
    <Row>
      <Col className="d-flex gap-4 border-bottom pb-2 mb-4">
        {tabs.map((tab, index) => (
          <span
            key={tab}
            className={index === 0 ? "fw-bold" : "text-muted"}
            style={{ cursor: "pointer" }}
          >
            {tab}
          </span>
        ))}
      </Col>
    </Row>
  );
};

export default CreditoTabs;
