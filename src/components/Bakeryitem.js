import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Bakeryitem extends Component {
  render() {
    let { title, text, imageurl } = this.props;

    return (
      <div className="d-flex align-items-center justify-content-center">
        <div className="card my-2" style={{ width: "18rem" }}>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Try our delicious {text}</p>
            <Link to={title} className="btn btn-outline-success">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
