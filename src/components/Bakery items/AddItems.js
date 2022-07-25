import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddItems extends Component {
  render() {
    let { name, price, itemimage } = this.props;

    return (
      <div className="d-flex align-items-center justify-content-center">
<div className="card my-2 mx-2" style={{ width: "18rem" }}>
        <img
          src={itemimage}
          className="card-img-top"
          alt="..."
          height={"200px"}
          width={"480px"}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
          <Link to="/" className="btn btn-outline-danger">
            Add +
          </Link>
        </div>
      </div>
      </div>
      
    );
  }
}
