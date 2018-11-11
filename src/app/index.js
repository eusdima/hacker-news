import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Menu from "./components/menu/Menu";
import { Home, New, Article } from "./routes";

import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menuAndPageWrapper">
          <p className="header">HackerNews Stories</p>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={New} />
            <Route path="/article/:articleId" component={Article} />
          </Switch>
          <p className="about">Eustatiu Dima</p>
        </div>
      </div>
    );
  }
}

export default App;
