import { connect } from "react-redux";
import { fetchSectorData } from "../Redux/action/stockAction";
import { withRouter } from "react-router-dom";
import SectorCard from "./SectorCard";
import React, { Component } from "react";

class SectorInfo extends Component {
  componentDidMount() {
    this.props.fetchSectorData();
  }
  mapData = () => {
    return this.props.sectorData.map(sector => {
      return <SectorCard key={sector.name} sectorData={sector} />;
    });
  };
  render() {
    console.log(this.props, "123", this.props.sectorData);
    return <div className="sectorContainer">{this.mapData()}</div>;
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
