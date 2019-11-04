import React from "react";
import Numeral from "numeral";
import "../styleSheets/SectorCard.css";
const SectorCard = props => {
  const { sectorData } = props;
  let change = sectorData.performance * 100;
  let pctChange = Numeral(change).format("0.00");
  let positiveInt = pctChange - pctChange - pctChange;
  let overallChange = sectorData.Change

  return (
    <span className="ticker__item">
      <div className="sector">{sectorData.Name}</div>
      <div className="price-change">
        {pctChange > 0 ? (
          <p className="ticker-positive-change">%{overallChange}</p>
        ) : (
          <p className="ticker-negative-change">%{overallChange}</p>
        )}
      </div>
    </span>
  );
};

export default SectorCard;
