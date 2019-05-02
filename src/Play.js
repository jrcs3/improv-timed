import React, { Component } from "react";
class Play extends Component {
  constructor(props) {
    super(props);

    const times = this.props.times;
    this.state = { times: times };
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

  getSum = (total, num) => {
    return `${total} ${num},`;
  }
  doClick = () => {
    const items = this.shuffle(this.state.times);
    alert(items.reduce(this.getSum, `` ));
  };

  render() {
    return (
      <div>
        <h1>Play</h1>
        <p>Play test and content here!</p>
        <button onClick={this.doClick}>Do It</button>
      </div>
    );
  }
}
export default Play;
