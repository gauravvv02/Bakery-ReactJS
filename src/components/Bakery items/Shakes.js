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
        {/* <img src="https://images.unsplash.com/photo-1507751030261-fad8907a59a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1177&q=80" alt="" className="img-fluid rounded" style={myStyle} /> */}
        <div className="container my-3">
          <div className="row">
            <AddItems name="Vanilla Shake" price="Price : Rs. 200" />
            <AddItems name="Strawberry Shake" price="Price : Rs. 200" />
            <AddItems name="Kit Kat Shake" price="Price : Rs. 300" />
            <AddItems name="Choco Chip Shake" price="Price : Rs. 250" />
            <AddItems name="Hazelnut Shake" price="Price : Rs. 300" />
            <AddItems name="Ras Malai Shake" price="Price : Rs. 350" />
          </div>
        </div>
      </>
    );
  }
}
