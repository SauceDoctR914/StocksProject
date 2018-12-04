import React from "react";
import { connect } from "react-redux";
import RenderNews from "./RenderNews";
class StockNews extends React.Component {
  state = {
    news: []
  };
  componentDidMount() {
    let stockName = this.props.stock.companyName.split(" ")[0];
    if (stockName) {
      fetch(
        `https://www.accunewsapp.com/api/v1/articles/?keyword=${stockName}&apiKey=979ba529eeb8dabd3e2ed5f93dd012c807b38c09&limit=15`
      )
        .then(res => res.json())
        .then(res => Object.values(res))
        .then(respArray => respArray[1])
        .then(news =>
          this.setState({
            news: news
          })
        );
    }
  }
  renderNews = () => {
    let ourNews = this.state.news;
    return ourNews.map(newsObj => {
      return <RenderNews key={newsObj.url} news={newsObj} />;
    });
  };
  render() {
    return (
      <div className="newsDiv">
        {this.state.news ? this.renderNews() : "Loading data.."}
      </div>
    );
  }
}
export default StockNews;
