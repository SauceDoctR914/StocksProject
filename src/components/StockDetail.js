import React from "react";
import StockNews from "./StockNews";
import { connect } from "react-redux";
import ChartComponent from "../chartComponents/index.js";
import { Link } from "react-router-dom";
import StockAlgo from "./StockAlgo";
import Numeral from "numeral";
import MiniChart from "../chartComponents/MiniIndex";
import CompanyInfo from "./CompanyInfo";
class StockDetail extends React.Component {
  render() {
    const stock = this.props.stocks.find(stockObj => {
      return stockObj.quote.symbol === this.props.match.params.symbol;
    });
    const symbol = this.props.match.params.symbol;
    if (stock) {
    }
    return (
      <div id="stockdetail">
        {stock ? (
          <div className="infoDiv">
            <div className="detailTop">
              <h1 className="companyTitle">{stock.quote.companyName}</h1>
              <div className="price">
                $ {Numeral(stock.quote.latestPrice).format("0,0.00")}
              </div>
            </div>
            <Link to="/">
              <button className="back">Main Page</button>
            </Link>
            <StockAlgo symbol={this.props.match.params.symbol} stock={stock} />
          </div>
        ) : (
          "getting data..."
        )}
        <div className="chart-company-div">
          <div className="chartDiv">
            <ChartComponent symbol={symbol} />
            <div className="miniChartDiv">
              <MiniChart symbol={symbol} />
            </div>
            {stock ? <CompanyInfo stock={stock} /> : null}
          </div>
        </div>
        {stock ? (
          <div className="news-render">
            <h2 className="StockNewsWords">{symbol} News</h2>
            <StockNews stock={stock} />
          </div>
        ) : (
          "loading news.."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stocks: state.stocks };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     selectStock: stock => dispatch({ type: "SELECT_STOCK", payload: stock })
//   };
// };
export default connect(mapStateToProps)(StockDetail);

//{stock.news.map(newsObj => {
//   return <StockNews key={newsObj.headline} newsObj={newsObj} />;
// })}
