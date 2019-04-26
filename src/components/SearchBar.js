import React, { Component } from "react";
class SearchBar extends Component {
  handleSearchChange = e => {
    this.props.searchChange(e.target.value);
  };

  render() {
    return (
      <div className="search">
        <form className="form-class">
          <div className="input-div">
            <input
              className="input-class"
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
