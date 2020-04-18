import React, { Component } from "react";
import StockCard from "./StockCard";
import "../styleSheets/StockContainer.css";
class StockContainer extends Component {

  mapData = () => {
    return this.props.stocks.map(stock => {
      return <StockCard key={stock.quote.symbol} stock={stock} />;
    });
  };

  render() {
    return <div className="StockContainer">{this.mapData()}</div>;
  }
}

export default StockContainer;
