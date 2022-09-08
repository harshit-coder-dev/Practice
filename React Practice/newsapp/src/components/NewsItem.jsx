import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://images.indianexpress.com/2022/09/NASA-Artemis-III-spacesuit-20220908.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target={"_blank"} rel={"noreferrer"} className="btn btn-sm btn-info">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
