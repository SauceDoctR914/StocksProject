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
      )
      .catch(err => console.log(err));
  }
  rsiAlgo = () => {
    let total = 0;
    if (this.state.stockRSI.length > 1) {
      let stockRSI = Object.values(this.state.stockRSI[1]).length !== 0 ? Object.values(this.state.stockRSI[1])[1].RSI : 50;
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

  finalAlgo = () => {
    let result = this.peAlgo() + this.rsiAlgo();
    // smallest possible is zero - 10
    if (result <= 4) {
      return <p className="red" />;
    } else if (result <= 6 && result > 4) {
      return <p className="yellow" />;
    } else {
      return <p className="green" />;
    }
  };

  //10-7 green
  //6-3 yellow
  //3-0 red

  render() {
    return <div className="algo-div">{this.finalAlgo()}</div>;
  }
}

export default StockAlgo;
