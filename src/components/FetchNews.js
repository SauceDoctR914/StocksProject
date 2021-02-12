import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FrontPageNews from "./FrontPageNews";
const news_key = process.env.REACT_APP_NEWS_KEY

class FetchNews extends Component {
  state = {
    frontNews: []
  };
  componentDidMount() {
    fetch("https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw", {
  "method": "GET",
  "headers": {
    "x-bingapis-sdk": "true",
    "x-rapidapi-key": news_key,
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
  }
})
      .then(res => res.json())
      .then(news => {
        this.setState({ frontNews: news.value});
      })
      .catch(err => console.log(err));
  }
  mapFrontNews = () => {
    return this.state.frontNews.map(newsObj => {
      return <FrontPageNews key={newsObj.name} news={newsObj} />;
    });
  };
  render() {
    return (
      <div className="frontNews">
        <h2 id="newstitle">Business News</h2>
        {this.mapFrontNews()}
      </div>
    );
  }
}

export default withRouter(FetchNews);
