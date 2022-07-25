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
          <h2 classname="heading">Burgers</h2>
          <div className="row my-3">
            <div className="col md-4">
              <AddItems name="Cheese Burger" price="Price : Rs. 150" itemimage="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Aloo Patty Burger" price="Price : Rs. 70" itemimage="https://images.unsplash.com/photo-1585238341710-4d3ff484184d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1104&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Crispy Chicken Burger" price="Price : Rs. 200" itemimage="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Crispy Veg Burger" price="Price : Rs. 150" itemimage="https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1205&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Paneer Royal Burger" price="Price : Rs. 220" itemimage="https://images.unsplash.com/photo-1557130597-9e5e0aac11a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80" />
            </div>
            <div className="col md-4">
              <AddItems name="Veg Whooper" price="Price : Rs. 250" itemimage="https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
