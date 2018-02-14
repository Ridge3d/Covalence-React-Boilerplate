import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FrontPage from "./frontpage";
import PostPage from "./postpage";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/post" component={PostPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default Navigation;
