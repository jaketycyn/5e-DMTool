import React from "react";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p classNmae="Dialog-message">Thank you for visiting ourspacecraft!</p>
    </FancyBorder>
  );
}

export default FancyBorder;
