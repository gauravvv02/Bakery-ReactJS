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
            src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt="..." className="img-fluid rounded"
            style={myStyle}
          /> */}
        <div className="container my-3">
          {/* <h2 classname="heading">Burgers</h2> */}
          <div className="row my-3">
            <AddItems name="Cheese Burger" price="Price : Rs. 150" />
            <AddItems name="Aloo Patty Burger" price="Price : Rs. 70" />
            <AddItems name="Crispy Chicken Burger" price="Price : Rs. 200" />
            <AddItems name="Crispy Veg Burger" price="Price : Rs. 150" />
            <AddItems name="Paneer Royal Burger" price="Price : Rs. 220" />
            <AddItems name="Veg Whooper" price="Price : Rs. 250" />
          </div>
        </div>
      </>
    );
  }
}
