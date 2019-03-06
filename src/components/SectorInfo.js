import { connect } from "react-redux";
import { fetchSectorData } from "../Redux/action/stockAction";
import { withRouter } from "react-router-dom";

import React, { Component } from "react";

class SectorInfo extends Component {
  componentDidMount() {
    this.props.fetchSectorData();
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return { sectorData: state.sectorData };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSectorData: () => dispatch(fetchSectorData())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SectorInfo)
);
