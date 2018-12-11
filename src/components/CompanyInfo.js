import React, { Component } from "react";
import Numeral from "numeral";

class CompanyInfo extends Component {
  render() {
    return (
      <div className="companyDiv">
        <div className="about">
          <p className="aboutWord">ABOUT</p>
          <p className="companyDescription">
            {this.props.stock.company.description}
          </p>
        </div>
        <div className="innerCompany">
          <div className="ceo">
            <p className="ceoWord">CEO</p>
            <div className="ceoName">{this.props.stock.company.CEO}</div>
          </div>
          <div className="PE">
            <p className="peWords">Price-Earnings Ratio</p>
            <p className="peNum">
              {this.props.stock.quote.peRatio
                ? this.props.stock.quote.peRatio
                : "--"}
            </p>
          </div>
          <div className="yearweekhigh">
            <p className="yearhighName">52 Week High</p>
            <p className="yearhighNum">
              ${Numeral(this.props.stock.quote.week52High).format("0.00")}
            </p>
          </div>
          <div className="yearweeklow">
            <p className="yearlowName">52 Week Low</p>
            <p className="yearlowNum">
              ${Numeral(this.props.stock.quote.week52Low).format("0.00")}
            </p>
          </div>
          <div className="marketCap">
            <p className="marketCapWords">Market Cap</p>
            <p className="marketCapNum">
              ${Numeral(this.props.stock.quote.marketCap).format("0,0")}
            </p>
          </div>
          <div className="volume">
            <p className="volumeWords">Average Volume</p>
            <div>
              {Numeral(this.props.stock.quote.avgTotalVolume).format("0,0")}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyInfo;
