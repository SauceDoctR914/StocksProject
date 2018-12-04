import React from "react";
import StockNews from "./StockNews";
import { connect } from "react-redux";
import { fetchStocks } from "../action/stockAction";
import { withRouter } from "react-router-dom";
import ChartComponent from "../chartfolder/index.js";
import { Link } from "react-router-dom";
import StockAlgo from "./StockAlgo";
import Numeral from "numeral";
class StockDetail extends React.Component {
  render() {
    const stock = this.props.stocks.find(stockObj => {
      return stockObj.quote.symbol === this.props.match.params.symbol;
    });
    const symbol = this.props.match.params.symbol;
    if (stock) {
    }
    return (
      <div>
        <h2 />

        {stock ? (
          <div className="infoDiv">
            <h2 className="companyTitle">{stock.quote.companyName}</h2>
            {stock.quote.latestPrice}{" "}
          </div>
        ) : (
          "getting data..."
        )}
        <div className="chartDiv">
          <ChartComponent symbol={symbol} />
        </div>
        {stock ? (
          <div>
            <StockNews stock={stock.quote} />
            <StockAlgo symbol={this.props.match.params.symbol} stock={stock} />
            <button>
              Average Vol. {Numeral(stock.quote.avgTotalVolume).format()}
            </button>
          </div>
        ) : (
          "loading news.."
        )}
        <Link to="/stocks/">
          <button>Main Page</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { stocks: state.stocks };
};

const mapDispatchToProps = dispatch => {
  return {
    selectStock: stock => dispatch({ type: "SELECT_STOCK", payload: stock })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StockDetail);

//{stock.news.map(newsObj => {
//   return <StockNews key={newsObj.headline} newsObj={newsObj} />;
// })}
