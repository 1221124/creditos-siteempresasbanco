import React, { lazy, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useLabelsStore } from "utils/useLabelsStore";

const CardNavigator = lazy(() => import("utils/CardNavigator"));

const HomePage: React.FC = () => {
  const homeMessageLabel = useLabelsStore((state) => state.homeMessageLabel);
  const personNameLabel = useLabelsStore((state) => state.personNameLabel);
  const infoSections = useLabelsStore((state) => state.infoSections);

  const [maxSize, setMaxSize] = useState(0);

  const handleSizeMeasured = (size: number) => {
    setMaxSize((prev) => (size > prev ? size : prev));
  };

  return (
    <div>
      <h1 className="mb-4">{homeMessageLabel}</h1>
      <h4 className="text-muted mb-5">
        Olá, <strong>{personNameLabel}</strong>!
      </h4>
      <Row>
        {infoSections.map((section, sectionIdx) => (
          <Col key={sectionIdx} className="mb-4" style={{ minWidth: maxSize }}>
            <CardNavigator
              section={section}
              maxSize={maxSize}
              onSizeMeasured={handleSizeMeasured}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
