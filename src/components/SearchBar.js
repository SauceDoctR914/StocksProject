import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStocks } from "../Redux/action/stockAction";

class SearchBar extends Component {
  handleSearchChange = e => {
    this.props.searchChange(e.target.value);
  };

  render() {
    return (
      <div id="search">
        <form className="formClass">
          <div className="inputDiv">
            <input
              className="inputClass"
              type="text"
              placeholder="Search TickR"
              value={this.props.searchTerm}
              onChange={this.handleSearchChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks
  };
};

export default connect(mapStateToProps)(SearchBar);
