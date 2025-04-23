import React from "react";

interface ExpandableInfoProps {
  data: {
    encargoAnual: number;
    intervaloCobranca: string;
    debitoAgendado: string;
    contaOrigem: number;
  };
}

const ExpandableInfo: React.FC<ExpandableInfoProps> = ({ data }) => {
  return (
    <div className="p-3">
      <em>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Comissão Anual</strong>
            </div>
            <div>{data.encargoAnual} EUR</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Periodicidade</strong>
            </div>
            <div>{data.intervaloCobranca}</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Próximo Débito</strong>
            </div>
            <div>{data.debitoAgendado}</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Conta Associada</strong>
            </div>
            <div>{data.contaOrigem}</div>
          </div>
        </div>
      </em>
    </div>
  );
};

export default ExpandableInfo;
