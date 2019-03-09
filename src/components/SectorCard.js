import React, { Component } from "react";
import Numeral from "numeral";
const SectorCard = props => {
  const { sectorData } = props;
  let change = sectorData.performance * 100;
  let pctChange = Numeral(change).format("0.00");
  let positiveInt = pctChange - pctChange - pctChange;

  return (
    <div className="ticker">
      <div className="symbol">{sectorData.name}</div>:
      <div className="priceChange">
        {pctChange > 0 ? (
          <p className="positiveChange">%{pctChange}</p>
        ) : (
          <p className="negativeChange">%{positiveInt}</p>
        )}
      </div>
    </div>
  );
};

export default SectorCard;
