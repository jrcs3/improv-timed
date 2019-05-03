import React, { Component } from "react";
import { isNumber } from "util";
class Config extends Component {
  constructor(props) {
    super(props);

    const times = this.props.times;
    this.state = { times: times, totalSeconds: this.calcTotalSeconds(times) };
  }

  handleSubmit = e => {
    const times = this.state.times;
    this.props.changeConfig({
      times,
      totalSeconds: this.calcTotalSeconds(times)
    });
  };

  handleChange = e => {
    const times = this.state.times;
    times[e.target.id] = e.target.value;
    this.setState({ times, totalSeconds: this.calcTotalSeconds(times) });
  };

  calcTotalSeconds = tx => {
    const totalSeconds = tx.reduce(this.getSum, 0);
    return totalSeconds;
  };

  getSum = (total, num) => {
    let newNum = parseInt(num);
    if (isNaN(newNum) || !isNumber(newNum)) {
      newNum = 0;
    }
    return total + newNum;
  };

  addToEnd = () => {
    const times = this.state.times;
    times.push(null);
    this.setState({ times, totalSeconds: this.calcTotalSeconds(times) });
  };

  removeItem = e => {
    const index = parseInt(e.target.dataset.index);
    const times = this.state.times;
    times.splice(index, 1);
    this.setState({ times });
  };

  displayMinutesAndSeconds = seconds => {
    const minutes = Math.floor(seconds / 60, 0);
    console.log(minutes);
    const netSeconds = seconds - minutes * 60;
    return `${minutes}:${this.pad(netSeconds, 2)}`;
  };

  pad = (num, size) => {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  };

  render() {
    const listItems = this.state.times.map((number, index) => (
      <li key={index}>
        <input
          type="number"
          id={index}
          value={number}
          onChange={this.handleChange}
        />
        <button data-index={index} id={`rm_${index}`} onClick={this.removeItem}>
          -
        </button>
      </li>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Configure Times in Seconds</h1>
        <ul className="timeList">
          {listItems}
          <li>
            <button onClick={this.addToEnd}>+</button>
          </li>
          <li>
            {this.state.totalSeconds} -{" "}
            {this.displayMinutesAndSeconds(this.state.totalSeconds)}
          </li>
        </ul>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default Config;
