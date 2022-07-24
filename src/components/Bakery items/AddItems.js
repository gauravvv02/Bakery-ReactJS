import React, { Component } from "react";

export default class AddItems extends Component {
  render() {
    let { name, price } = this.props;

    const myStyle = {
      backgroundColor:"transparent",
      border: "2px solid black",
    }

    return (
        <div className="col-sm-6">
          <div className="card my-2" style={myStyle}>
            <div className="card-body">
              <h5 className="card-title"><strong>{name}</strong></h5>
              <p className="card-text">{price}</p>
              <a href="/" className="btn btn-outline-danger">
                Add +
              </a>
            </div>
          </div>
        </div>
    );
  }
}
