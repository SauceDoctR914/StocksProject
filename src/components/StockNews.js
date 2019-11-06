import React from "react";
import RenderNews from "./RenderNews";
import "../styleSheets/StockNews.css";
class StockNews extends React.Component {
  state = {
    news: []
  };

  componentDidMount() {
    let stockName = this.props.stock.quote.symbol;
    const iex_key = process.env.REACT_APP_IEX_KEY
    console.log(process.env.REACT_APP_IEX_KEY, "logging test", iex_key)

    if (stockName) {
      fetch(
        `https://cloud.iexapis.com/stable/stock/${stockName}/news?token=${iex_key}`
      )
        .then(res => res.json())
        .then(res =>
          this.setState({
            news: res
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
