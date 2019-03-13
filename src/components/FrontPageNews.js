import React from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";

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
        <div className="frontNews">
          <div className="renderNews">
            {news.urlToImage ? (
              <div className="imageDiv">
                <img
                  className="images"
                  alt="News Image"
                  src={news.urlToImage}
                />
              </div>
            ) : null}
            <div className="headline">
              <div className="sourceDiv">{news.source.name}</div>
              <div className="titleDiv">{news.title}</div>
            </div>
            <div className="newsInfo">
              <div className="publishDate">
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
