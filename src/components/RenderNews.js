import React, { Component } from "react";

class RenderNews extends Component {
  render() {
    console.log(this.props.news.image);
    return (
      <div className="renderNews">
        {this.props.news.image ? (
          <div className="imageDiv">
            <img className="images" src={this.props.news.image} />
          </div>
        ) : null}
        <div className="titleDiv">{this.props.news.title}</div>
      </div>
    );
  }
}

export default RenderNews;
