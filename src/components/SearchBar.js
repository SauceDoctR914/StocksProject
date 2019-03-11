import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStocks } from "../Redux/action/stockAction";

class SearchBar extends Component {
  handleSearchChange = e => {
    this.props.searchChange(e.target.value);
  };

  render() {
    console.log(this.props, "gg");
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

export default SearchBar;
