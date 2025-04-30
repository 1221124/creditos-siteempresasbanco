import React from "react";
import { Col } from "react-bootstrap";

interface CardItemProps {
  title: string;
  value: string | number;
  isPercentage?: boolean;
  isCurrency?: boolean;
  bordered?: boolean;
  start?: boolean;
  end?: boolean;
}

const CardItem: React.FC<CardItemProps> = ({
  title,
  value,
  isPercentage = false,
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
      {isPercentage
        ? `${Number(value.toString().substring(0, value.toString().length - 1))
            .toFixed(2)
            .replace(".", ",")} %`
        : isCurrency
        ? new Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR",
          }).format(Number(value))
        : value}
    </div>
  </Col>
);

export default CardItem;
