import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div>
        This is news component
        <NewsItem title="myTitle" description="myDesc" />
      </div>
    );
  }
}

export default News;
