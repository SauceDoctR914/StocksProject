import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";

const MainNews = props => {
  const { frontPage } = props;
  console.log(props.frontPage); //regex to remove [+chars]
  return (
    <div>
      {frontPage ? (
        <a
          href={frontPage.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="frontPage">
            <div className="fronttitleDiv">{frontPage.title}</div>
            <div className="content">{frontPage.content}</div>
            <div className="renderFront">
              <div className="imageInfoRow">
                {frontPage.urlToImage ? (
                  <img
                    className="frontimage"
                    alt="News Image"
                    src={frontPage.urlToImage}
                  />
                ) : null}

                <div className="frontheadline">
                  <div className="frontsourceDiv">{frontPage.source.name}</div>
                  <div className="frontpublishDate">
                    {Moment(frontPage.time).calendar()}
                  </div>
                </div>
                <div className="frontPageInfo" />
              </div>
            </div>
          </div>
        </a>
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default withRouter(MainNews);
