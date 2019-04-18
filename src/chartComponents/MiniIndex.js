import React from "react";
// import { render } from "react-dom";
import MiniChart from "./MiniChart";
import { getData } from "./MiniUtils";

// import { TypeChooser } from "react-stockcharts/lib/helper";

export default class ChartComponent extends React.Component {
  componentDidMount() {
    getData(this.props.symbol).then(data => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <MiniChart symbol={this.props.symbol} data={this.state.data} />
      </div>
    );
  }
}
