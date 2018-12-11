import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Moment from "moment";
class RenderNews extends Component {
  render() {
    return (
      <a
        href={this.props.news.link}
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="renderNews">
          {this.props.news.image ? (
            <div className="imageDiv">
              <img className="images" src={this.props.news.image} />
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
      </a>
    );
  }
}

export default withRouter(RenderNews);
