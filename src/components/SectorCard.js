import React, { Component } from "react";
import Numeral from "numeral";
const SectorCard = props => {
  const { sectorData } = props;
  let change = sectorData.performance * 100;
  let pctChange = Numeral(change).format("0.00");
  let positiveInt = pctChange - pctChange - pctChange;

  return (
    <span className="ticker__item">
      <div className="sector">{sectorData.name}</div>
      <div className="priceChange">
        {pctChange > 0 ? (
          <p className="tickerPositiveChange">%{pctChange}</p>
        ) : (
          <p className="tickerNegativeChange">%{positiveInt}</p>
        )}
      </div>
    </span>
  );
};

export default SectorCard;