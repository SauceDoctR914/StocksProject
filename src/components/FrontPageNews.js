import React from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";
import "../styleSheets/FrontPageNews.css";
const FrontPageNews = props => {
  const { news } = props;
  return (
    <a
      href={news.url}
      rel="noopener noreferrer"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      {news && news.urlToImage !== null ? (
        <div className="front-news">
          <div className="render-news">
            {news.urlToImage ? (
              <img className="images" alt="News" src={news.urlToImage} />
            ) : null}
            <div className="headline">
              <div className="source-div">{news.source.name}</div>
              <div className="news-desc">{news.title}</div>
            </div>
            <div className="news-info">
              <div className="publish-date">
                {Moment(news.publishedAt).calendar()}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </a>
  );
};
export default withRouter(FrontPageNews);
