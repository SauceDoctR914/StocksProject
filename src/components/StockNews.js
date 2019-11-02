import React from "react";
import RenderNews from "./RenderNews";
import "../styleSheets/StockNews.css";
class StockNews extends React.Component {
  state = {
    news: []
  };

  componentDidMount() {
    let stockName = this.props.stock.quote.symbol;
    console.log(stockName, "YOOOO", this.props.stock.quote.symbol)
    if (stockName) {
      fetch(
        `https://cloud.iexapis.com/stable/stock/${stockName}/news?token=pk_79dabda8e73241bfb303146304847a54`
      )
        .then(console.log)
        .then(res =>
          this.setState({
            news: res.data
          })
        )
        .catch(err => console.log(err));
    }
  }
  // switch this api to stockNewsapi *check email*
  renderNews = () => {
    let ourNews = this.state.news;
    return ourNews.map(newsObj => {
      return <RenderNews key={newsObj.url} news={newsObj} />;
    });
  };
  render() {
    return (
      <div className="news-div">
        {this.state.news ? this.renderNews() : "Loading data.."}
      </div>
    );
  }
}
export default StockNews;
