/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PdfPreview from "./PdfPreview";

interface ExpandableInfoProps {
  row: any;
}

const ExpandableInfo: React.FC<ExpandableInfoProps> = ({ row }) => {
  return row.extra !== undefined ? (
    <div className="p-3">
      <em>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Comissão Anual</strong>
            </div>
            <div>{row.extra.encargoAnual} EUR</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Periodicidade</strong>
            </div>
            <div>{row.extra.intervaloCobranca}</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Próximo Débito</strong>
            </div>
            <div>{row.extra.debitoAgendado}</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Conta Associada</strong>
            </div>
            <div>{row.extra.contaOrigem}</div>
          </div>
        </div>
      </em>
    </div>
  ) : (
    <div className="p-3">
      <em>
        <PdfPreview />
      </em>
    </div>
  );
};

export default ExpandableInfo;
