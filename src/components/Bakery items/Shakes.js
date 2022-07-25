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
        <h2 classname="heading">Shakes</h2>
          <div className="row">
            <div className="col md-4">
              <AddItems name="Vanilla Shake" price="Price : Rs. 200" itemimage="https://media.gettyimages.com/photos/dine-out-the-vanilla-milkshake-at-the-recently-opened-black-cow-on-picture-id989904680?s=2048x2048" />
            </div>
            <div className="col md-4">
              <AddItems name="Strawberry Shake" price="Price : Rs. 200" itemimage="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </div>
            <div className="col md-4">
              <AddItems name="Kit Kat Shake" price="Price : Rs. 300" itemimage="https://media.gettyimages.com/photos/low-key-chocolate-smoothies-on-a-table-in-a-rustic-kitchen-picture-id1126893721?s=2048x2048" />
            </div>
            <div className="col md-4">
              <AddItems name="Choco Chip Shake" price="Price : Rs. 250" itemimage="https://media.gettyimages.com/photos/preparing-homemade-chocolate-milkshake-picture-id1127332981?s=2048x2048" />
            </div>
            <div className="col md-4">
              <AddItems name="Hazelnut Shake" price="Price : Rs. 300" itemimage="https://images.unsplash.com/photo-1473115209096-e0375dd6b3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Oreo Shake" price="Price : Rs. 350" itemimage="https://media.gettyimages.com/photos/milkshake-picture-id1173813252?s=2048x2048" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
