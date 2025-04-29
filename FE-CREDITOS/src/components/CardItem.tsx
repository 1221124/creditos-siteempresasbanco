import React from "react";
import { Col } from "react-bootstrap";

interface CardItemProps {
  title: string;
  value: string | number;
  isCurrency?: boolean;
  bordered?: boolean;
  start?: boolean;
  end?: boolean;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  value,
  isCurrency = false,
  bordered = true,
  start = false,
  end = false,
}) => (
  <Col
    className={`bg-light py-4 ${bordered ? "border" : ""} ${
      start ? "rounded-start" : ""
    } ${end ? "rounded-end" : ""}`}
  >
    <div className="fw-bold">{title}</div>
    <div>
      {value} {isCurrency ? <span className="ms-1">EUR</span> : null}
    </div>
  </Col>
);

export default CardItem;
