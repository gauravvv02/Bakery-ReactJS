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
            <div className="col md-4">
              <AddItems name="Caramel Donut" price="Price : Rs. 150" itemimage="https://images.unsplash.com/photo-1618436719578-02dd9cb6e562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Chocolate Donut" price="Price : Rs. 180" itemimage="https://images.unsplash.com/photo-1516549445027-be9aebc57853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Party Eclair" price="Price : Rs. 200" itemimage="https://images.unsplash.com/photo-1613768547316-1bc9392ecc02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Choco Pop " price="Price : Rs. 250" itemimage="https://images.unsplash.com/photo-1618436790110-4a5c3d042aa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
