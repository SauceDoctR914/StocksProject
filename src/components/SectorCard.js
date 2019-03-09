import React, { Component } from "react";

const SectorCard = props => {
  const { sectorData } = props;

  return (
    <div className="ticker">
      {sectorData.sector}: {sectorData.performance * 100}
    </div>
  );
};

export default SectorCard;
