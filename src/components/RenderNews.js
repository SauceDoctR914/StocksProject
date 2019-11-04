import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Moment from "moment";
class RenderNews extends Component {
  render() {
    return (
      <a
        href={this.props.news.url}
        rel="noopener noreferrer"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        {this.props.news.image_url !== null ? (
          <div className="renderNews">
          
              <div className="company-image-div">
              {this.props.news.image ? (
                <img
                  className="images"
                  alt="News"
                  src={this.props.news.image}
                />
                ) : null}
              </div>
            <div className="headline">
              <h4>{this.props.news.source}</h4>
              <p>{this.props.news.headline}</p>
            </div>
            <div id="published">{Moment(this.props.news.datetime).calendar()}</div>
          </div>
        ) : null}
      </a>
    );
  }
}

export default withRouter(RenderNews);
