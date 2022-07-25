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
            <div className="col md-4">
              <AddItems
                name="Grilled Vegies Sandwich"
                price="Price : Rs. 250"
                itemimage="https://images.unsplash.com/photo-1592415486689-125cbbfcbee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
              />
            </div>
            <div className="col md-4">
              <AddItems
                name="Grilled Bombay Sandwich"
                price="Price : Rs. 150"
                itemimage="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              />
            </div>
            <div className="col md-4">
              <AddItems
                name="Cheese and Corn Sandwich"
                price="Price : Rs. 200"
                itemimage="https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1254&q=80"
              />
            </div>
            <div className="col md-4">
              <AddItems name="Egg Sandwich" price="Price : Rs. 220" itemimage="https://images.unsplash.com/photo-1479894720049-067d8b87f2d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
