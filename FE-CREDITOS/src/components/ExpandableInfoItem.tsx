import React from "react";
import { Col } from "react-bootstrap";

interface ExpandableInfoItemProps {
  title: string;
  value: string | number;
  isCurrency?: boolean;
}

const ExpandableInfoItem: React.FC<ExpandableInfoItemProps> = ({
  title,
  value,
  isCurrency,
}) => (
  <Col className="bg-light py-4 border">
    <div className="fw-bold">{title}</div>
    <div>
      {isCurrency ? (
        <>
          {value.toLocaleString()}
          <span className="ms-1">EUR</span>
        </>
      ) : (
        value
      )}
    </div>
  </Col>
);

export default ExpandableInfoItem;
