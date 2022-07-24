import React, { Component } from "react";
import "./Bakery.css";
import Bakeryitem from "./Bakeryitem";
import sandwiches from "./Images/sandwiches.jpg";
import cakes from "./Images/cakes.jpg";
import burgers from "./Images/burgers.jpg";
import Pizzas from "./Images/Pizzas.jpg"
import Donuts from "./Images/Donuts.jpg";
import Shakes from "./Images/Shakes.jpg";

export default class Bakery extends Component {
  render() {
    return (
      <div className="container">
        {/* <img className="image" src={bakerybg} alt="" /> */}
        <span
          h1
          className="heading my-3"
        >
          Welcome to the Cake Factory
        </span>
        <div className="container my-3">
          <div className="row">
            <div className="col md-4">
              <Bakeryitem
                title="Sandwiches"
                text="Sandwiches"
                imageurl={sandwiches}
              />
            </div>
            <div className="col md-6">
              <Bakeryitem title="Cakes" text="Cakes" imageurl={cakes} />
            </div>
            <div className="col md-4">
              <Bakeryitem title="Burgers" text="Burgers" imageurl={burgers} />
            </div>
            <div className="col md-4">
              <Bakeryitem title="Pizzas" text="Pizzas" imageurl={Pizzas} />
            </div>
            <div className="col md-4">
              <Bakeryitem title="Donuts" text="Donuts" imageurl={Donuts} />
            </div>
            <div className="col md-4">
              <Bakeryitem title="Shakes" text="Shakes" imageurl={Shakes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
