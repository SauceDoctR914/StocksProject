import React from "react";
import StockNews from "./StockNews";
import { connect } from "react-redux";
import ChartComponent from "../chartComponents/index.js";
import { Link } from "react-router-dom";
import StockAlgo from "./StockAlgo";
import Numeral from "numeral";
import MiniChart from "../chartComponents/MiniIndex";
import CompanyInfo from "./CompanyInfo";
import "../styleSheets/StockDetail.css";
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
              <span className="price-rec">
                {" "}
                <div className="price">
                  $ {Numeral(stock.quote.latestPrice).format("0,0.00")}
                </div>
                <StockAlgo
                  symbol={this.props.match.params.symbol}
                  stock={stock}
                />
              </span>
            </div>
            <Link onClick={this.forceUpdate} to="/">
              <button className="back">Main Page</button>
            </Link>
          </div>
        ) : (
          "getting data..."
        )}
        <div className="chart-news-info">
          <div className="chart-company-div">
            <div className="chartDiv">
              <ChartComponent symbol={symbol} />

              <MiniChart symbol={symbol} />
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
          {stock ? <CompanyInfo stock={stock} /> : null}
        </div>
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
