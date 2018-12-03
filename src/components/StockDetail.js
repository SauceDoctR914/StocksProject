import React from "react";
import StockNews from "./StockNews";
import { connect } from "react-redux";
import { fetchStocks } from "../action/stockAction";
import { withRouter } from "react-router-dom";
import ChartComponent from "../chartfolder/index.js";
import { Link } from "react-router-dom";
class StockDetail extends React.Component {
  render() {
    const stock = this.props.stocks.find(stockObj => {
      return stockObj.quote.symbol == this.props.match.params.symbol;
    });
    const symbol = this.props.match.params.symbol;
    return (
      <div>
        <h2 />
        {stock ? stock.quote.latestPrice : "getting data..."}
        {stock ? (
          <div>
            {stock.news.map(newsObj => {
              return <StockNews key={newsObj.headline} newsObj={newsObj} />;
            })}
          </div>
        ) : (
          "loading news.."
        )}
        <ChartComponent symbol={symbol} />
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
