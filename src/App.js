import React, { Component } from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";

import store from "app/store";
import Home from "layouts/Home";
import Register from "components/user/Register";
import Topbar from "components/Topbar";
import history from "history.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Topbar />
          <Router history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/sign-up" component={Register} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
