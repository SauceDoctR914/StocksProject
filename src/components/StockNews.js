import React from "react";
import RenderNews from "./RenderNews";
class StockNews extends React.Component {
  state = {
    news: []
  };
  componentDidMount() {
    let stockName = this.props.stock.companyName.split(" ")[0];
    if (stockName) {
      fetch(
        `https://www.accunewsapp.com/api/v1/articles/?keyword=${stockName}&apiKey=6e75924676fedef09899d849df0d2947120eb7ec&limit=10`
      )
        .then(res => res.json())
        .then(res => Object.values(res))
        .then(respArray => respArray[1])
        .then(news =>
          this.setState({
            news: news
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
      <div className="newsDiv">
        {this.state.news ? this.renderNews() : "Loading data.."}
      </div>
    );
  }
}
export default StockNews;
