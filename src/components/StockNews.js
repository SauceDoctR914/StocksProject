import React from "react";
import RenderNews from "./RenderNews";
import "../styleSheets/StockNews.css";
class StockNews extends React.Component {
  state = {
    news: []
  };
  componentDidMount() {
    let stockName = this.props.stock.quote.companyName.split(" ")[0];
    if (stockName) {
      fetch(
        `xhttps://stocknewsapi.com//api/v1?tickers=${stockName}&items=5&fallback=true&token=lsi19hzmc509wbvziykvr7wrbjw4f9tiq6dcshjm`
      )
        .then(res => res.json())
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
    console.log(this.props.stock.quote.companyName, "gaaavz", this.state.news);
    return (
      <div className="news-div">
        {this.state.news ? this.renderNews() : "Loading data.."}
      </div>
    );
  }
}
export default StockNews;
