import React, { Component } from "react";
class Play extends Component {
  constructor(props) {
    super(props);

    const times = this.props.times;
    this.state = { times, step: 0 };
    this.workingStack = [];
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  nextStep = () => {
    if (this.workingStack.length === 0) {
      return this.finishProcessing();
    }
    const top = this.workingStack.pop() * 1000;
    setTimeout(() => {
      const step = this.state.step + 1;
      //step++;
      this.setState({ step });
      this.nextStep();
    }, top);
  };

  finishProcessing = () => {
    alert(`All Done!`);
  };

  doClick = () => {
    const items = this.shuffle(Array.from(this.state.times));
    this.workingStack = items;
    this.setState({ step: 0 });
    this.nextStep();
  };

  render() {
    return (
      <div>
        <h1>Play</h1>
        <p>Play test and content here!</p>
        <p>{this.state.step}</p>
        <button onClick={this.doClick}>Do It</button>
      </div>
    );
  }
}
export default Play;
