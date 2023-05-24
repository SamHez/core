import React from "react";
import BarChart from "../figures/BarChart";
import { Row, Col } from "react-bootstrap";
import ErrorBoundary from "./ErrorBoundary";

export default function GraphContainer({ policies }) {
  return (
    <div className="shadow-sm p-3 mb-5 bg-body rounded graph-container">
      <div className="tw-flex tw-justify-between tw-px-3">
        <h5 className="tw-text-lg tw-font-medium chart-ttl">Monthly Stickers Issued</h5>
        <div className="tw-flex tw-gap-2 md:tw-gap-3 tw-text-sm">
          <div className="tw-flex tw-gap-1 tw-items-end">
            <span>
              <div className="tw-w-5 tw-h-5 tw-bg-[#acdf87] tw-rounded"></div>
            </span>
            <p className="chart-ttl">{new Date().getFullYear() - 1}</p>
          </div>
          <div className="tw-flex tw-gap-1 tw-items-end">
            <span>
              <div className="tw-w-5 tw-h-5 tw-bg-[#132f50] tw-rounded"></div>
            </span>
            <p className="chart-ttl">{new Date().getFullYear()}</p>
          </div>
        </div>
      </div>

      <Row
        style={{
          paddingTop: "3vh",
          paddingBottom: "2vh",
          paddingRight: "3vh",
        }}
      >
        <ErrorBoundary>
          <Col id="graph-space" className="graph-space">
            <BarChart policies={policies} />
          </Col>
        </ErrorBoundary>
      </Row>
      <Row style={{ diplay: "flex", justifyContent: "center" }}>
        <Col>
          <h6 className="chart-ttl">Months</h6>
        </Col>
      </Row>
    </div>
  );
}
