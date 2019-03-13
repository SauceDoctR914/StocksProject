import React, { Component } from "react";
import Numeral from "numeral";

const CompanyInfo = props => {
  const { stock } = props;
  return (
    <div className="companyDiv">
      <div className="about">
        <div className="aboutWord">ABOUT</div>
        <div className="companyDescription">{stock.company.description}</div>
      </div>
      <div className="innerCompany">
        <div className="ceo">
          <div className="ceoWord">CEO</div>
          <div className="ceoName">{stock.company.CEO}</div>
        </div>
        <div className="PE">
          <div className="peWords">Price-Earnings Ratio</div>
          <div className="peNum">
            {stock.quote.peRatio ? stock.quote.peRatio : "--"}
          </div>
        </div>
        <div className="yearweekhigh">
          <div className="yearhighName">52 Week High</div>
          <div className="yearhighNum">
            ${Numeral(stock.quote.week52High).format("0.00")}
          </div>
        </div>
        <div className="yearweeklow">
          <div className="yearlowName">52 Week Low</div>
          <div className="yearlowNum">
            ${Numeral(stock.quote.week52Low).format("0.00")}
          </div>
        </div>
        <div className="marketCap">
          <div className="marketCapWords">Market Cap</div>
          <div className="marketCapNum">
            ${Numeral(stock.quote.marketCap).format("0,0")}
          </div>
        </div>
        <div className="volume">
          <div className="volumeWords">Average Volume</div>
          <div className="volumeNum">
            {Numeral(stock.quote.avgTotalVolume).format("0,0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
