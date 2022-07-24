import React, { Component } from "react";
import AddItems from "./AddItems";

export default class Cakes extends Component {
  render() {
    // const myStyle = {
    //   width: "80%",
    //   height: "50%",
    //   objectFit: "cover",
    // };
    return (
      <>
        {/* <img
          src="https://images.unsplash.com/photo-1626078299034-89c04b7fe4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80s"
          alt=""
          className="img-fluid rounded"
          style={myStyle}
        /> */}
          <div className="container my-3">
        <div className="row">
            <AddItems name="Grilled Vegies Sandwich" price="Price : Rs. 250" />
            <AddItems name="Grilled Bombay Sandwich" price="Price : Rs. 150" />
            <AddItems name="Cheese and Corn Sandwich" price="Price : Rs. 200" />
            <AddItems name="Paneer Sandwich" price="Price : Rs. 220" />
          </div>
        </div>
      </>
    );
  }
}
