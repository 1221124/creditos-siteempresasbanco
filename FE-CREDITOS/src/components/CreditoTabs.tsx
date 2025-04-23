import React from "react";
import { Row, Col } from "react-bootstrap";

interface CreditoTabsProps {
  tabs: string[];
  activeTab: number;
  onTabClick: (index: number) => void;
}

const CreditoTabs: React.FC<CreditoTabsProps> = ({
  tabs,
  activeTab,
  onTabClick,
}) => {
  return (
    <Row>
      <Col className="d-flex gap-4 border-bottom pb-2 mb-4">
        {tabs.map((tab, index) => (
          <span
            key={tab}
            className={`cursor-pointer ${
              index === activeTab ? "fw-bold" : "text-muted"
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => onTabClick(index)}
          >
            {tab}
          </span>
        ))}
      </Col>
    </Row>
  );
};

export default CreditoTabs;
