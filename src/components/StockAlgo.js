// import React, { Component } from "react";
//
// class StockAlgo extends Component {
//   state = {
//     stockRSI: []
//   };
//   symbol = this.props.match.params.symbol;
//   componentDidMount() {
//     fetch(
//       `https://www.alphavantage.co/query?function=RSI&symbol=${symbol}&interval=60min&time_period=400&series_type=open&apikey=6O3PYIBYDLIKW6EZ`
//     )
//       .then(res => res.json())
//       .then(responseObj => Object.values(responseObj))
//       .then(stock =>
//         this.setState({
//           stockRSI: stock
//         })
//       );
//   }
//   rsiAlgo = () => {
//     let total = 0;
//     if (this.state.stockRSI.length > 1) {
//       let stockRSI = Object.values(this.state.stockRSI[1])[1].RSI;
//       let pe = this.props.stock.quote.peRatio;
//       if (stockRSI <= 70 && stockRSI >= 30) {
//         return total + 3;
//       } else if (stockRSI > 70) {
//         return total;
//       } else {
//         return total + 6;
//       }
//       if (pe <= 10) {
//         return total + 4;
//       } else if (pe >= 10 && pe < 30) {
//         return total + 3;
//       } else if (pe >= 30 && pe < 60) {
//         return total + 2;
//       } else if (pe >= 60 && pe <= 90) {
//         return total + 1;
//       } else {
//         return total;
//       }
//     }
//   };
//
//   //10-7 green
//   //6-3 yellow
//   //3-0 red
//
//   render() {
//     return <div />;
//   }
// }
//
// export default StockAlgo;
