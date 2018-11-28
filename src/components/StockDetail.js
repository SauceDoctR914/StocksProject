import React from "react";
import { connect } from "react-redux";
import { fetchStocks } from "../action/stockAction";
import { withRouter } from "react-router-dom";

class StockDetail extends React.Component {

  render() {
    // debugger;
    console.log("hi", this.props.selectedStock);
    return <div>hi</div>;
  }
}

const mapStateToProps = state => {
  return {
    selectedStock: state.selectedStock
  };
};
export default connect(mapStateToProps)(withRouter(StockDetail));
