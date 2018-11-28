import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStocks } from "../action/stockAction";

class SearchBar extends Component {
  handleSearchChange = e => {
    this.props.searchChange(e.target.value);
  };

  render() {
    return (
      <div>
        <form className="formClass">
          <p>
            
            <input
              type="text"
              placeholder="Search TickR"
              value={this.props.searchTerm}
              onChange={this.handleSearchChange}
            />
          </p>
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
