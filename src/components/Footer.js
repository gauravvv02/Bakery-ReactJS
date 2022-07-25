import React from "react";

export const Footer = () => {
  let footerstyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light py-3" style={footerstyle}>
      <h5 className="text-center">&copy; CakeFactory.com</h5>
      <p>Contact Us : +91XXXXXXXXXX</p>
      <p>Address : ABC, Paschim Vihar,<br /> New Delhi- 110063</p>
    </footer>
  );
};
