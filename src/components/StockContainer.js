import React, { Component } from "react";
import StockCard from "./StockCard";
import StockDetail from "./StockDetail";
import Date from "./Date";
import { Route, Switch } from "react-router-dom";
import StockAlgo from "./StockAlgo";
import SearchBar from "./SearchBar";
class StockContainer extends Component {
  // setInterval(() => this.props.fetchStocks(), 10000000000000000000)

  mapData = () => {
    return this.props.stocks.map(stock => {
      return <StockCard key={stock.quote.symbol} stock={stock} />;
    });
  };

  render() {
    return (
      <div className="StockContainer">
        {this.mapData()}
        <div className="searchDiv">
          <SearchBar
            searchChange={this.props.onSearchChange}
            searchTerm={this.props.searchTerm}
          />
        </div>
      </div>
    );
  }
}

export default StockContainer;
