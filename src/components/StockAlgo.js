import React, { Component } from "react";

class StockAlgo extends Component {
  state = {
    stockRSI: []
  };

  componentDidMount() {
    let symbol = this.props.symbol;
    fetch(
      `https://www.alphavantage.co/query?function=RSI&symbol=${symbol}&interval=60min&time_period=400&series_type=open&apikey=6O3PYIBYDLIKW6EZ`
    )
      .then(res => res.json())
      .then(responseObj => Object.values(responseObj))
      .then(stock =>
        this.setState({
          stockRSI: stock
        })
      );
  }
  rsiAlgo = () => {
    let total = 0;
    if (this.state.stockRSI.length > 1) {
      let stockRSI = Object.values(this.state.stockRSI[1])[1].RSI;
      if (stockRSI <= 70 && stockRSI >= 30) {
        return total + 3;
      } else if (stockRSI > 70) {
        return total;
      } else {
        return total + 6;
      }
    }
  };

  peAlgo = () => {
    let pe = this.props.stock.quote.peRatio;
    let total = 0;
    if (pe <= 10 && pe >= 0) {
      return total + 4;
    } else if (pe >= 10 && pe < 30) {
      return total + 3;
    } else if (pe >= 30 && pe < 60) {
      return total + 2;
    } else if (pe >= 60 && pe <= 90) {
      return total + 1;
    } else {
      return total;
    }
  };

  everythingAlgo = () => {
    let result = this.peAlgo() + this.rsiAlgo();
    // smallest possible is zero - 10
    if (result <= 4) {
      return <button className="red">No Good</button>;
    } else if (result <= 6 && result > 4) {
      return <button className="yellow">Netural</button>;
    } else {
      return <button className="green">Confident Buy</button>;
    }
  };

  //10-7 green
  //6-3 yellow
  //3-0 red

  render() {
    if (this.state.stockRSI && this.state.stockRSI[1]) {
      console.log(Object.values(this.state.stockRSI[1]));
    }
    return <div>{this.everythingAlgo()}</div>;
  }
}

export default StockAlgo;
