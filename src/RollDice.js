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
      isRolling: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll(e) {
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);
    this.setState({
      face1: this.props.faces[num1],
      face2: this.props.faces[num2],
      isRolling: true,
    });

    setTimeout(() => this.setState({ isRolling: false }), 1000);
  }

  render() {
    return (
      <div>
        <div className="Dice">
          <Die face={this.state.face1} rolling={this.state.isRolling} />
          <Die face={this.state.face2} rolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
