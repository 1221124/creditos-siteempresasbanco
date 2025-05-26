/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import Invoices from "./Invoices";
import CardItem from "./CardItem";
import { Documento } from "../types/types";
import { useLabelsStore } from "utils/useLabelsStore";

const Loading = React.lazy(() => import("utils/Loading"));
const Error = React.lazy(() => import("utils/Error"));

type ExpandableInfoProps = {
  headers: string[];
  data: any;
  invoices: Documento[];
  loading: boolean;
  error: string | null;
};

const ExpandableInfo: React.FC<ExpandableInfoProps> = ({
  headers,
  data,
  invoices,
  loading,
  error,
}) => {
  const [showInvoicesPreview, setShowInvoicesPreview] = useState(false);
  const seeInvoicesLabel = useLabelsStore((state) => state.seeInvoicesLabel);

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
                const isPercentage = /%$/.test(value);
                const isCurrency = /[.,]\d+$/.test(value);

                return (
                  <CardItem
                    key={index}
                    title={header}
                    value={value}
                    isPercentage={isPercentage}
                    isCurrency={isCurrency}
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
