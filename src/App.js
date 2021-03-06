import React, { Component } from 'react'
import store from 'app/store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from 'layouts/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={Home} />
        </div>
      </Provider>
    );
  }
}

export default App