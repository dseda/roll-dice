import React, { Component } from "react";

class Die extends Component {
  render() {
    return (
      <i
        className={`fas fa-dice-${this.props.face} die ${
          this.props.rolling ? "rolling" : ""
        }`}
      ></i>
    );
  }
}

export default Die;
