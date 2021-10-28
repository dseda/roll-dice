import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.state = { face: this.props.face };
    this.convertToFace = this.convertToFace.bind(this);
  }

  convertToFace() {
    let faces = ["one", "two", "three", "four", "five", "six"];
    return faces[this.props.face];
  }
  render() {
    return <i className={`fas fa-dice-${this.convertToFace()} die`}></i>;
  }
}

export default Die;
