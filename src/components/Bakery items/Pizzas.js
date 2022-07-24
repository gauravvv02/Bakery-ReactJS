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
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="img-fluid rounded"
          style={myStyle}
        /> */}
        <div className="container my-3">
          <div className="row">
            <AddItems name="Margherita Pizza" price="Price : Rs. 250" />
            <AddItems name="Onions Pizza" price="Price : Rs. 150" />
            <AddItems name="capsicum Pizza" price="Price : Rs. 200" />
            <AddItems name="Garden Delight Pizza" price="Price : Rs. 600" />
            <AddItems name="Paneer Tikka Pizza" price="Price : Rs. 550" />
            <AddItems name="Sweet Corn Pizza" price="Price : Rs. 250" />
          </div>
        </div>
      </>
    );
  }
}
