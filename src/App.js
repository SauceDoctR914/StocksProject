import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { fetchStocks } from "./action/stockAction";
import SearchBar from "./components/SearchBar";
import StockContainer from "./components/StockContainer";
import StockDetail from "./components/StockDetail";
import { Route, Switch } from "react-router-dom";
import Moment from "moment";
import Date from "./components/Date";
import { withRouter } from "react-router-dom";

class App extends Component {
  // componentDidMount() {
  //   setInterval(() => {
  //     this.props.fetchStocks();
  //   }, 1000000);
  // }
  componentDidMount() {
    this.props.fetchStocks();
  }
  state = {
    searchTerm: ""
  };

  onSearchChange = event => {
    this.setState({
      searchTerm: event
    });
  };

  filterSearch = () => {
    if (this.state.searchTerm === "") {
      return this.props.stocks;
    } else {
      return this.props.stocks.filter(
        stock =>
          stock.quote.symbol.toLowerCase().includes(this.state.searchTerm) ||
          stock.quote.symbol.includes(this.state.searchTerm)
      );
    }
  };

  render() {
    return (
      <div>
        <SearchBar
          searchChange={this.onSearchChange}
          searchTerm={this.state.searchTerm}
        />
        <Switch>
          <Route
            path="/stocks/:symbol"
            render={routerProps => <StockDetail {...routerProps} />}
          />
          <Route
            exact
            path="/stocks"
            render={routerProps => (
              <React.Fragment>
                <StockContainer {...routerProps} stocks={this.filterSearch()} />
                <Date />
              </React.Fragment>
            )}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    stocks: state.stocks
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchStocks: () => dispatch(fetchStocks())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
