import React, { lazy, useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavTabs from "utils/NavTabs";
import { useLabelsStore } from "utils/useLabelsStore";
import { CreditWalletCard } from "../types/types";

const SquareCard = lazy(() => import("utils/SquareCard"));

type CreditWalletProps = {
  cards: CreditWalletCard[];
};

const CreditWallet: React.FC<CreditWalletProps> = ({ cards }) => {
  const navigate = useNavigate();
  const walletTabs = useLabelsStore((state) => state.walletTabs);
  const walletLabel = useLabelsStore((state) => state.walletLabel);
  const garantiasLabel = useLabelsStore((state) => state.garantiasLabel);
  const creditosDocImportLabel = useLabelsStore(
    (state) => state.creditosDocImportLabel
  );
  const garantiasPathLabel = useLabelsStore(
    (state) => state.garantiasPathLabel
  );
  const creditosDocImportPathLabel = useLabelsStore(
    (state) => state.creditosDocImportPathLabel
  );

  const [maxSize, setMaxSize] = useState(0);

  const handleSizeMeasured = (size: number) => {
    setMaxSize((prev) => (size > prev ? size : prev));
  };

  const handleButtonNavigation = (cardTitle: string) => {
    switch (cardTitle) {
      case garantiasLabel:
        navigate(garantiasPathLabel);
        break;
      case creditosDocImportLabel:
        navigate(creditosDocImportPathLabel);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2 className="mb-4">{walletLabel}</h2>
      <NavTabs tabs={walletTabs} tabsStyle={1} />
      <div className="d-flex justify-content-between align-items-center my-4">
        <h5 className="mb-0 fw-bold">Outras Responsabilidades</h5>
      </div>
      <Row className="d-flex flex-nowrap g-4">
        {cards.map((card, idx) => (
          <SquareCard
            key={idx}
            uniformSize={maxSize > 0 ? maxSize : undefined}
            onSizeMeasured={handleSizeMeasured}
          >
            <Card className="shadow-sm">
              <Card.Body
                className="d-flex flex-column justify-content-between"
                style={{ whiteSpace: "nowrap" }}
              >
                <div>
                  <Card.Title className="d-flex justify-content-between align-items-center fs-6 text-uppercase text-muted">
                    Outras Responsabilidades
                  </Card.Title>
                  <h5 className="fw-bold mb-3">{card.title}</h5>
                  <div className="mb-1">
                    <span className="text-muted">Nº Operações</span>
                    <div className="fw-bold">{card.operations}</div>
                  </div>
                  <div className="mb-3">
                    <span className="text-muted">Montante</span>
                    <div className="fw-bold">{card.amount}</div>
                  </div>
                </div>
                <div>
                  <Button
                    variant="primary"
                    className="px-0 pt-0 border-0 bg-transparent text-primary fw-semibold"
                    style={{ textDecoration: "none", boxShadow: "none" }}
                    onClick={() => handleButtonNavigation(card.title)}
                  >
                    Ver detalhes &gt;
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </SquareCard>
        ))}
      </Row>
    </div>
  );
};

export default CreditWallet;
