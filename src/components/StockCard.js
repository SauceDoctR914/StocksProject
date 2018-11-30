import React from "react";
// import StockDetail from "./StockDetail";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class StockCard extends React.Component {
  render() {
    return (
      <div className="StockCard">
        <h3>{this.props.stock.quote.symbol}</h3>
        <p>{this.props.stock.quote.latestPrice}</p>
        <h4>P/E: {this.props.stock.quote.peRatio}</h4>
        <Link to={`/stocks/${this.props.stock.quote.symbol}`}>
          <button>Stock Page</button>
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
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StockCard)
);
