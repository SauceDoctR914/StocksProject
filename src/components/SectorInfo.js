import React from "react";
import { connect } from "react-redux";
import { fetchSectorData } from "../action/stockAction";
const SectorInfo = props => {
  return;
};

const mapStateToProps = state => {
  return {};
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
