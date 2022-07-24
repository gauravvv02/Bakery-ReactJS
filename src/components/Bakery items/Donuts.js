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
      {/* <img src="https://images.unsplash.com/photo-1533137015-38dbe301e281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80" alt="" className="img-fluid rounded" style={myStyle} /> */}
      <div className="container my-3">
        
        <div className="row">
          <AddItems name="Caramel Donut" price="Price : Rs. 150" />
          <AddItems name="Chocolate Donut" price="Price : Rs. 150" />
          <AddItems name="Party Eclair" price="Price : Rs. 200" />
          <AddItems name="Choco Pop " price="Price : Rs. 250" />
        </div>
      </div>
      </>
    );
      
  }
}
