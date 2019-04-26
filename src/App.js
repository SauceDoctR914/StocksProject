import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { connect } from "react-redux";
import { fetchStocks } from "./Redux/action/stockAction";
import SectorInfo from "./components/SectorInfo";
import StockContainer from "./components/StockContainer";
import StockDetail from "./components/StockDetail";
import { Route, Switch } from "react-router-dom";
import Date from "./components/Date";
import { withRouter } from "react-router-dom";
import FetchNews from "./components/FetchNews";
class App extends Component {
  componentDidMount() {
    this.props.fetchStocks();
    setInterval(() => {
      this.props.fetchStocks();
    }, 100000);
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
      <div className="app">
        <Switch>
          <Route
            path="/stocks/:symbol"
            render={routerProps => <StockDetail {...routerProps} />}
          />
          <Route
            exact
            path="/"
            render={routerProps => (
              <React.Fragment>
                <div className="title-date">
                  <h1 className="the-title">2Stoc</h1>
                  <div className="time">
                    <Date />
                  </div>
                </div>
                <div className="ticker-container">
                  <SectorInfo />
                </div>
                <div className="stock-sector-news">
                  <FetchNews />
                  <div className="search-stock-card">
                    <div className="search-div">
                      <SearchBar
                        searchChange={this.onSearchChange}
                        searchTerm={this.searchTerm}
                      />
                    </div>
                    <StockContainer
                      {...routerProps}
                      stocks={this.filterSearch()}
                      onSearchChange={this.onSearchChange}
                      searchTerm={this.state.searchTerm}
                    />
                  </div>
                </div>
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
