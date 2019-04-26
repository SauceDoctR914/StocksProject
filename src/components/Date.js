import React, { Component } from "react";
import Moment from "moment";
class Date extends Component {
  componentDidMount() {
    let intervalId = setInterval(() => {
      this.setState({
        currentTime: Moment().format("hh:mm:ss A")
      });
    }, 1000);
    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  state = {
    currentTime: Moment().format("hh:mm:ss"),
    intervalId: ""
  };
  render() {
    return (
      <div className="date-time">
        <div className="date">{Moment().format("dddd, MMMM Do YYYY")}</div>
        <div className="the-time">{this.state.currentTime}</div>
      </div>
    );
  }
}

export default Date;
//
