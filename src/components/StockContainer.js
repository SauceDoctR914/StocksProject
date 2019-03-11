import React, { Component } from "react";
import StockCard from "./StockCard";
import StockDetail from "./StockDetail";
import Date from "./Date";
import { Route, Switch } from "react-router-dom";
import SearchBar from "./SearchBar";
class StockContainer extends Component {
  // setInterval(() => this.props.fetchStocks(), 10000000000000000000)

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
