import React, { Component } from "react";
import AddItems from "./AddItems";

export default class Cakes extends Component {
  render() {
    return (
      <>
        <div className="cakes">
          <div className="container my-3">
          <h2 classname="heading">Cakes</h2>
            <div className="row">
              <div className="col md-4">
                <AddItems
                  name="Pineapple Cake"
                  price="Price : Rs. 400"
                  itemimage="https://images.unsplash.com/photo-1529687659817-6e17fab7ab36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                />
              </div>
              <div className="col md-4">
                <AddItems
                  name="Fruit Cake"
                  price="Price : Rs. 400"
                  itemimage="https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=933&q=80"
                />
              </div>
              <div className="col md-4">
                <AddItems
                  name="Chocolate Cake"
                  price="Price : Rs. 500"
                  itemimage="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80"
                />
              </div>
              <div className="col md-4">
                <AddItems
                  name="Black Forest Cake"
                  price="Price : Rs. 600"
                  itemimage="https://media.istockphoto.com/photos/black-forest-cake-picture-id182895267?s=612x612"
                />
              </div>
              <div className="col md-4">
                <AddItems
                  name="Chocolate Truffle Cake"
                  price="Price : Rs. 550"
                  itemimage="https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
                />
              </div>
              <div className="col md-4">
                <AddItems
                  name="Rasmalai Cake"
                  price="Price : Rs. 700"
                  itemimage="https://i.pinimg.com/564x/77/52/24/77522449ea7d0c5f15fcf39368dcf422.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
