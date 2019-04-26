import React from "react";
import Numeral from "numeral";
import "../styleSheets/CompanyInfo.css";
const CompanyInfo = props => {
  const { stock } = props;
  return (
    <div className="company-div">
      <div className="about">
        <div className="about-title">ABOUT</div>
        <div className="company-description">{stock.company.description}</div>
      </div>
      <div className="company-detail">
        <div className="detail-section">
          <h4>CEO</h4>
          <p className="ceoName">{stock.company.CEO}</p>
        </div>
        <div className="detail-section">
          <h4>Price-Earnings Ratio</h4>
          <p>{stock.quote.peRatio ? stock.quote.peRatio : "--"}</p>
        </div>
        <div className="detail-section">
          <h4>52 Week High</h4>
          <p>${Numeral(stock.quote.week52High).format("0.00")}</p>
        </div>
        <div className="detail-section">
          <h4>52 Week Low</h4>
          <p>${Numeral(stock.quote.week52Low).format("0.00")}</p>
        </div>
        <div className="detail-section">
          <h4>Market Cap</h4>
          <p>${Numeral(stock.quote.marketCap).format("0,0")}</p>
        </div>
        <div className="detail-section">
          <h4>Average Volume</h4>
          <p>{Numeral(stock.quote.avgTotalVolume).format("0,0")}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
