import React from "react";
// import StockDetail from "./StockDetail";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Numeral from "numeral";
import MiniChart from "../chartfolder/MiniIndex";

class StockCard extends React.Component {
  render() {
    let change = this.props.stock.quote.changePercent * 100;
    let pctChange = Numeral(change).format("0.00");
    let positiveInt = pctChange - pctChange - pctChange;

    return (
      <Link
        to={`/stocks/${this.props.stock.quote.symbol}`}
        style={{ textDecoration: "none" }}
      >
        <div className="StockCard">
          <div className="symbol">{this.props.stock.quote.symbol}</div>
          <div className="priceDiv">
            ${Numeral(this.props.stock.quote.latestPrice).format("0.00")}
          </div>
          <div className="changeDiv">
            {change > 0 ? (
              <button className="positiveChange">%{pctChange}</button>
            ) : (
              <button className="negativeChange">%{positiveInt}</button>
            )}
          </div>
        </div>
      </Link>
    );
  }
}
// <button className="stockPageButton">Stock Page</button>
const mapStateToProps = state => {
  return { stocks: state.stocks };
};

const mapDispatchToProps = dispatch => {
  return {
    selectStock: stock => dispatch({ type: "SELECT_STOCK", payload: stock })
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StockCard)
);
