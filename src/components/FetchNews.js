import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Moment from "moment";
import FrontPageNews from "./FrontPageNews";
import MainNews from "./MainNews";
class FetchNews extends Component {
  state = {
    frontNews: [],
    frontPage: null
  };
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=b5a13a28236741d8ac279cf07232d1c4"
    )
      .then(res => res.json())
      .then(response => Object.values(response)[2])
      .then(news => {
        let frontPage = news.splice(0, 1)[0];
        this.setState({ frontNews: news, frontPage: frontPage });
      });
  }
  mapFrontNews = () => {
    return this.state.frontNews.map(newsObj => {
      return <FrontPageNews key={newsObj.title} news={newsObj} />;
    });
  };
  render() {
    console.log(this.state.frontPage);
    return (
      <div>
        <div>
          {this.state.frontPage !== null && this.state.frontPage ? (
            <div className="topNews">
              <MainNews frontPage={this.state.frontPage} />
            </div>
          ) : (
            "Getting Data..."
          )}
          {this.mapFrontNews()}
        </div>
      </div>
    );
  }
}

export default withRouter(FetchNews);
