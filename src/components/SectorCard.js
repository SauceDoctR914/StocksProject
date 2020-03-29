import React from "react";
import Numeral from "numeral";
import "../styleSheets/SectorCard.css";
const SectorCard = props => {
  const { name, sectorData } = props;
  let pctChange = parseFloat(sectorData[name])
  let overallChange = parseFloat(sectorData[name].replace(/-/g, ""));


  return (
    <span className="ticker__item">
      <div className="sector">{name}</div>
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
