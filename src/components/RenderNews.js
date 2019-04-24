import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";
class RenderNews extends Component {
  render() {
    return (
      <a
        href={this.props.news.news_url}
        rel="noopener noreferrer"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        {this.props.news.image_url !== null ? (
          <div className="renderNews">
            {this.props.news.image_url ? (
              <div className="imageDiv">
                <img
                  className="images"
                  alt="News"
                  src={this.props.news.image_url}
                />
              </div>
            ) : null}
            <div className="headline">
              <h4>{this.props.news.source_name}</h4>
              <p>{this.props.news.title}</p>
            </div>
            <div id="published">{Moment(this.props.news.date).calendar()}</div>
          </div>
        ) : null}
      </a>
    );
  }
}

export default withRouter(RenderNews);
