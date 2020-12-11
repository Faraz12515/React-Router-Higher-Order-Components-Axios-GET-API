import React from "react";

const Rainbow = (WrappedComponent) => {
  const colours = ["red", "pink", "orange", "blue", "green", "yello"];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + "-text";

  return () => {
    return (
      <div className={className}>
        <WrappedComponent />
      </div>
    );
  };
};

export default Rainbow;
