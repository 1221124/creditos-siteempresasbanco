/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import PdfPreview from "./PdfPreview";
import { FaChevronRight } from "react-icons/fa";
import Invoices from "./Invoices";
import Loading from "../components/Loading";
import Error from "../components/Error";
import CardItem from "./CardItem";
import { Documento } from "../types/types";
import { useLabelsStore } from "../store/useLabelsStore";

type PdfProps = {
  pdfPreview: true;
};

type DataProps = {
  pdfPreview?: false;
  headers: string[];
  data: any;
  invoices: Documento[];
  loading: boolean;
  error: string | null;
};

type ExpandableInfoProps = PdfProps | DataProps;

const ExpandableInfo: React.FC<ExpandableInfoProps> = (props) => {
  const [showInvoicesPreview, setShowInvoicesPreview] = useState(false);
  const seeInvoicesLabel = useLabelsStore((state) => state.seeInvoicesLabel);

  if (props.pdfPreview) {
    return (
      <div className="p-3">
        <PdfPreview fileUrl="/fake.pdf" />
      </div>
    );
  }

  const { headers, data, invoices, loading, error } = props;

  return (
    <div className="p-3">
      <em>
        {loading && <Loading />}
        {error && <Error message={error} />}
        {!loading && !error && (
          <>
            <Row className="text-center gy-3">
              {headers.map((header, index) => {
                const key = Object.keys(data)[index];
                const value = data?.[key] ?? "—";

                return (
                  <CardItem
                    key={index}
                    title={header}
                    value={value}
                    bordered={false}
                  />
                );
              })}
            </Row>

            <hr className="my-3" />
            <div
              className="d-flex justify-content-end align-items-center gap-2"
              onClick={() => setShowInvoicesPreview(true)}
              style={{ cursor: "pointer" }}
            >
              <span style={{ display: "contents" }}>{seeInvoicesLabel}</span>
              <FaChevronRight />
            </div>

            {showInvoicesPreview && (
              <Invoices
                data={invoices}
                show={showInvoicesPreview}
                setShow={setShowInvoicesPreview}
              />
            )}
          </>
        )}
      </em>
    </div>
  );
};

export default ExpandableInfo;
