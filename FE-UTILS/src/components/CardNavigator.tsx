import React, { useState, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SquareCard from "./SquareCard";
import Loading from "./Loading";
import { InfoSection } from "../store/types";

interface CardNavigatorProps {
  section: InfoSection;
  maxSize: number;
  onSizeMeasured: (size: number) => void;
}

const CardNavigator: React.FC<CardNavigatorProps> = ({
  section,
  maxSize,
  onSizeMeasured,
}) => {
  const [index, setIndex] = useState(0);
  const [measuring, setMeasuring] = useState(true);
  const remainingMeasurements = useRef(section.items.length);

  const handleMeasure = (size: number) => {
    onSizeMeasured(size);
    remainingMeasurements.current -= 1;
    if (remainingMeasurements.current === 0) setMeasuring(false);
  };

  const item = section.items[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? section.items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === section.items.length - 1 ? 0 : prev + 1));
  };

  const renderCardContent = (it: typeof item) => (
    <>
      <Card.Title
        className="mb-3"
        style={{ fontSize: "1.25rem", fontWeight: 700 }}
      >
        {section.title}
      </Card.Title>

      {it.image && (
        <img
          src={it.image}
          alt="item"
          style={{
            width: 256,
            height: 256,
            objectFit: "cover",
            marginBottom: "0.75rem",
            borderRadius: 4,
          }}
        />
      )}

      <h5 style={{ fontWeight: "normal" }}>{it.text}</h5>

      {!measuring && section.items.length > 1 && (
        <div className="d-flex justify-content-between align-items-center mt-3 w-100">
          <Button variant="light" size="sm" onClick={handlePrev}>
            <FaChevronLeft />
          </Button>
          <span style={{ fontSize: "0.75rem", color: "#888" }}>
            {index + 1}/{section.items.length}
          </span>
          <Button variant="light" size="sm" onClick={handleNext}>
            <FaChevronRight />
          </Button>
        </div>
      )}
    </>
  );

  return (
    <>
      {measuring && (
        <div
          style={{
            visibility: "hidden",
            position: "absolute",
            pointerEvents: "none",
            height: 0,
          }}
        >
          {section.items.map((it, i) => (
            <SquareCard key={`probe-${i}`} onSizeMeasured={handleMeasure}>
              <Card className="p-3" style={{ whiteSpace: "normal" }}>
                {renderCardContent(it)}
              </Card>
            </SquareCard>
          ))}
          <Loading />
        </div>
      )}

      {!measuring && (
        <SquareCard uniformSize={maxSize} onSizeMeasured={() => {}}>
          <Card
            className="shadow-sm d-flex flex-column align-items-center justify-content-between p-3 text-center"
            style={{ whiteSpace: "normal" }}
          >
            {renderCardContent(item)}
          </Card>
        </SquareCard>
      )}
    </>
  );
};

export default CardNavigator;
