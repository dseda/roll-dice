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
      face1: this.props.face,
      face2: this.props.face,
      isClicked: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll(e) {
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);
    if (num1 && num2) {
      this.setState({
        face1: this.props.faces[num1],
        face2: this.props.faces[num2],
        isClicked: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Die face={this.state.face1} />
        <Die face={this.state.face2} />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}

export default RollDice;
