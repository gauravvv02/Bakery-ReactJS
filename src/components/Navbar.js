import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="my-2 navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Cake Factory
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/Cakes">
                  Cakes
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/Sandwiches">
                  Sandwiches
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/Pizzas">
                  Pizzas
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/Burgers">
                  Burgers
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/Donuts">
                  Donuts
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/Shakes">
                  Shakes
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/About">
                  About Us
                </Link>
              </li>
            </ul>
            <li className="btn btn-outline-success text-light">Your Cart</li>
          </div>
        </div>
      </nav>
    </div>
  );
}
