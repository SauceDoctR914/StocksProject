import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FrontPageNews from "./FrontPageNews";
class FetchNews extends Component {
  state = {
    frontNews: [],
    frontPage: null
  };
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b5a13a28236741d8ac279cf07232d1c4"
    )
      .then(res => res.json())
      .then(response => Object.values(response)[2])
      .then(news => {
        let frontPage = news.splice(0, 1)[0];
        this.setState({ frontNews: news, frontPage: frontPage });
      })
      .catch(err => console.log(err));
  }
  mapFrontNews = () => {
    return this.state.frontNews.map(newsObj => {
      return <FrontPageNews key={newsObj.title} news={newsObj} />;
    });
  };
  render() {
    return (
      <div className="frontNews">
        <h2 id="newstitle">Business Headlines</h2>
        {this.mapFrontNews()}
      </div>
    );
  }
}

export default withRouter(FetchNews);
