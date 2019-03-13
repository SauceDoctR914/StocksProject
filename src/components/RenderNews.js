import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";
class RenderNews extends Component {
  render() {
    return (
      <a
        href={this.props.news.link}
        rel="noopener noreferrer"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        {this.props.news.image !== null ? (
          <div className="renderNews">
            {this.props.news.image ? (
              <div className="imageDiv">
                <img
                  className="images"
                  alt="News"
                  src={this.props.news.image}
                />
              </div>
            ) : null}
            <div className="headline">
              <div className="sourceDiv">{this.props.news.source.name}</div>
              <div className="titleDiv">{this.props.news.title}</div>
            </div>
            <div className="newsInfo">
              <div className="publishDate">
                {Moment(this.props.news.time).calendar()}
              </div>
            </div>
          </div>
        ) : null}
      </a>
    );
  }
}

export default withRouter(RenderNews);
