/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PdfPreview from "./PdfPreview";
import { FaChevronRight } from "react-icons/fa";
import { useFaturasStore } from "../store/useFaturasStore";
import Invoices from "./Invoices";

interface ExpandableInfoProps {
  row: any;
}

const ExpandableInfo: React.FC<ExpandableInfoProps> = ({ row }) => {
  const [showInvoicesPreview, setShowInvoicesPreview] = useState(false);

  const { data } = useFaturasStore();

  return row.extra !== undefined ? (
    <div className="p-3">
      <em>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Encargo Anual</strong>
            </div>
            <div>{row.extra.encargoAnual} EUR</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Intervalo de Cobrança</strong>
            </div>
            <div>{row.extra.intervaloCobranca}</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Débito Agendado</strong>
            </div>
            <div>{row.extra.debitoAgendado}</div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div>
              <strong>Conta de Origem</strong>
            </div>
            <div>{row.extra.contaOrigem}</div>
          </div>
        </div>
        <hr className="my-3" />
        <div
          className="d-flex justify-content-end align-items-center align-text-center gap-2"
          onClick={() => setShowInvoicesPreview(true)}
          style={{ cursor: "pointer" }}
        >
          <span style={{ display: "contents" }} className="align-self-center">
            Ver Faturas
          </span>
          <FaChevronRight />
        </div>
        {showInvoicesPreview && (
          <Invoices
            data={data}
            show={showInvoicesPreview}
            setShow={setShowInvoicesPreview}
          />
        )}
      </em>
    </div>
  ) : (
    <div className="p-3">
      <PdfPreview fileUrl={"/fake.pdf"} />
    </div>
  );
};

export default ExpandableInfo;
