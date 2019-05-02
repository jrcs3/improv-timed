import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Config from "./Config";
import Play from "./Play";

class Main extends Component {
  constructor() {
    super();
    this.state = { data: "test", times: [30, 10, 90, 55, 35] };
  }
  changeConfig = (e) => {
    this.setState({times: e.times});
  }
  render() {
      const times = this.state.times;
    console.log(times);
    return (
      <HashRouter>
        <div>
          <h1>Scene Length Randomizer</h1>
          <ul className="header">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/config">Configure Times</NavLink>
            </li>
            <li>
              <NavLink to="/play">Play scenes now</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/config" render={() => <Config times={times} changeConfig={this.changeConfig}  />}
 />
            <Route
              path="/play"
              render={props => <Play times={times} />}
            />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
