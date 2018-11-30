import React from "react";
import { connect } from "react-redux";
const StockNews = props => {
  const { news } = props;

  return (
    <div className="newsDiv">
      {props.newsObj.headline}
      <img src={props.newsObj.image} />
    </div>
  );
};

export default StockNews;
