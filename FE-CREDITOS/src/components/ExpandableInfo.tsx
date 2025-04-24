/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import PdfPreview from "./PdfPreview";
import { FaChevronRight } from "react-icons/fa";

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
        <hr className="my-3" />
        <div
          className="d-flex justify-content-end align-items-center align-text-center gap-2"
          onClick={() => alert("Ver Faturas!")}
          style={{ cursor: "pointer" }}
        >
          <span style={{ display: "contents" }} className="align-self-center">
            Ver Faturas
          </span>
          <FaChevronRight />
        </div>
      </em>
    </div>
  ) : (
    <div className="p-3">
      <PdfPreview fileUrl={"/fake.pdf"} />
    </div>
  );
};

export default ExpandableInfo;
