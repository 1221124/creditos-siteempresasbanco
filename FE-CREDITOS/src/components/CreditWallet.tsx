import React, { useState } from "react";
import { Card, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SquareCard from "./SquareCard";
import NavTabs from "utils/NavTabs";
import { useLabelsStore } from "utils/useLabelsStore";

interface CreditCardData {
  title: string;
  operations: number;
  amount: string;
  maxAmount?: string;
}

const cards: CreditCardData[] = [
  {
    title: "Garantias e Avales",
    operations: 25,
    amount: "2.320.658,00 EUR",
  },
  {
    title: "Créditos Doc. de Importação",
    operations: 3,
    amount: "25.000,00 EUR",
    maxAmount: "25.000,00 EUR",
  },
];

const CreditWallet: React.FC = () => {
  const navigate = useNavigate();
  const walletTabs = useLabelsStore((state) => state.walletTabs);
  const walletLabel = useLabelsStore((state) => state.walletLabel);

  const [maxSize, setMaxSize] = useState(0);

  const handleSizeMeasured = (size: number) => {
    setMaxSize((prev) => (size > prev ? size : prev));
  };

  const handleButtonNavigation = (card: CreditCardData) => {
    return card.title === "Garantias e Avales"
      ? navigate("garantias-e-avales")
      : navigate("doc-importacao");
  };

  return (
    <div>
      <h2 className="mb-4">{walletLabel}</h2>
      <NavTabs tabs={walletTabs} tabsStyle={1} />
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0 fw-bold">Outras Responsabilidades</h5>
      </div>
      <Row className="d-flex flex-nowrap g-4">
        {cards.map((card, idx) => (
          <SquareCard
            key={idx}
            onSizeMeasured={handleSizeMeasured}
            uniformSize={maxSize > 0 ? maxSize : undefined}
          >
            <Card className="shadow-sm">
              <Card.Body
                className="d-flex flex-column justify-content-between"
                style={{
                  whiteSpace: "nowrap",
                }}
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
                    <span className="text-muted">
                      {card.maxAmount ? "Montante Máximo" : "Montante"}
                    </span>
                    <div className="fw-bold">{card.amount}</div>
                  </div>
                </div>
                <div>
                  <Button
                    variant="primary"
                    className="px-0 pt-0 border-0 bg-transparent text-primary fw-semibold"
                    style={{ textDecoration: "none", boxShadow: "none" }}
                    onClick={() => handleButtonNavigation(card)}
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
