import React from "react";
import StockNews from "./StockNews";
import { connect } from "react-redux";
import { fetchStocks } from "../action/stockAction";
import { withRouter } from "react-router-dom";

class StockDetail extends React.Component {
  render() {
    const stock = this.props.stocks.find(stockObj => {
      return stockObj.quote.symbol == this.props.match.params.symbol;
    });
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
