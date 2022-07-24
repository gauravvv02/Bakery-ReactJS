import React, { Component } from "react";
import AddItems from "./AddItems";

export default class Cakes extends Component {
  render() {
    return (
      <>
        <div className="cakes">
          <div className="container my-3">
            <div className="items">
              <div className="row">
                <AddItems name="Pineapple Cake" price="Price : Rs. 400" />
                <AddItems name="Strawberry Cake" price="Price : Rs. 400" />
                <AddItems name="Chocolate Cake" price="Price : Rs. 500" />
                <AddItems name="Black Forest Cake" price="Price : Rs. 600" />
                <AddItems name="Chocochip Cake" price="Price : Rs. 550" />
                <AddItems name="Rasmalai Cake" price="Price : Rs. 700" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
