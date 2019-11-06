import { connect } from "react-redux";
import { fetchSectorData } from "../Redux/action/stockAction";
import { withRouter } from "react-router-dom";
import "../styleSheets/SectorInfo.css";
import SectorCard from "./SectorCard";

import React, { Component } from "react";

class SectorInfo extends Component {
  componentDidMount() {
    this.props.fetchSectorData();
    setInterval(() => {
      this.props.fetchSectorData();
    }, 100000);
  }
  mapData = () => {
    return this.props.sectorData.map(sector => {
      return <SectorCard key={sector.name} sectorData={sector} />;
    });
  };
  render() {
    return <div className="ticker">{this.mapData()}</div>;
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
