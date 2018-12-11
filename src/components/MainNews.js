import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";

const MainNews = props => {
  const { frontPage } = props;
  console.log(props.frontPage);
  return (
    <div>
      {frontPage ? (
        <a
          href={frontPage.url}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="frontPage">
            <div className="fronttitleDiv">{frontPage.title}</div>
            <div className="imageInfoRow">
              {frontPage.urlToImage ? (
                <div className="frontimageDiv">
                  <img className="frontimage" src={frontPage.urlToImage} />
                </div>
              ) : null}
              <div className="renderFront">
                <div className="frontheadline">
                  <div className="frontsourceDiv">{frontPage.source.name}</div>
                  <div className="frontpublishDate">
                    {Moment(frontPage.time).calendar()}
                  </div>
                  <div className="content">{frontPage.content}</div>
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
