import React from "react";
import "../styles/dashboard.css";
import { Card } from "react-bootstrap";

export default function FirstContainer({ claimsSettled, policies, claims }) {
  return (
    <div
      id="bin"
      className="cards-dashboard tw-px-5 tw-py-5 tw-flex tw-flex-col tw-gap-3
      tw-justify-between tw-w-full"
    >
      <div className="tw-w-full tw-h-1/4 tw-gap-3 tw-flex tw-justify-between">
        <div className="tw-w-1/4">
          <div className="tw-w-full tw-h-full tw-bg-[#84c347] tw-rounded-lg card-solo">
            <div className="px-3 py-2 tw-text-white">
              <div className="stat-title">Claim Settlements</div>
              <div className="stat-num tw-text-xl md:tw-text-3xl md:tw-mt-3">{`${claimsSettled.length}`}</div>
            </div>
          </div>
        </div>
        <div className="tw-w-1/4">
          <div className="tw-w-full tw-h-full tw-bg-[#a2ce72] tw-rounded-lg card-solo">
            <div className=" px-3 py-2 tw-text-white">
              <div className="stat-title">Policies</div>
              <div className="stat-num tw-text-xl md:tw-text-3xl md:tw-mt-3">{`${policies.length}`}</div>
            </div>
          </div>
        </div>
        <div className="tw-w-1/4">
          <div className="tw-w-full tw-h-full tw-rounded-lg tw-bg-[#71a03f] card-solo">
            <div className=" px-3 py-2 tw-text-white">
              <div className="stat-title">Stickers</div>
              <div className="stat-num tw-text-xl md:tw-text-3xl md:tw-mt-3">{`${policies.length}`}</div>
            </div>
          </div>
        </div>
        <div className="tw-w-1/4">
          <div className="tw-w-full tw-h-full tw-bg-[#589b10] tw-rounded-lg card-solo">
            <div className="px-3 py-2 tw-text-white">
              <div className="stat-title">Claim Notifications</div>
              <div className="stat-num tw-text-xl md:tw-text-3xl md:tw-mt-3">{`${claims.length}`}</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
