import React, { Component } from "react";
import Rainbow from "../hoc/Rainbow";

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        tempor, diam quis maximus faucibus, felis quam porttitor quam, nec
        interdum leo nisi eu magna.
      </p>
    </div>
  );
};
export default Rainbow(About);
