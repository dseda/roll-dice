import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    face: "four",
    faces: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      face1: this.roll(),
      face2: this.roll(),
    };
    // this.roll = this.roll.bind(this);
  }

  roll() {
    let num = Math.floor(Math.random() * 6);
    console.log(num);
    if (num) {
      return this.props.faces[num];
    } else {
      return this.props.face;
    }
  }
  render() {
    return (
      <div>
        <Die face={this.state.face1} />
        <Die face={this.state.face2} />
      </div>
    );
  }
}

export default RollDice;
