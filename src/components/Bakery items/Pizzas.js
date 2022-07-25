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
            <div className="col md-4">
              <AddItems name="Margherita Pizza" price="Price : Rs. 250" itemimage="https://images.unsplash.com/photo-1627461985459-51600559fffe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Onions Pizza" price="Price : Rs. 150" itemimage="https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Capsicum Pizza" price="Price : Rs. 200" itemimage="https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Garden Delight Pizza" price="Price : Rs. 600" itemimage="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Paneer Tikka Pizza" price="Price : Rs. 550" itemimage="https://images.unsplash.com/photo-1573821663912-569905455b1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Sweet Corn Pizza" price="Price : Rs. 250" itemimage="https://images.unsplash.com/photo-1617343267017-e344bdc7ec94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
