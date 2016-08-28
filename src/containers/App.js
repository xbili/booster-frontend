import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

require('../styles/core.scss')

class App extends Component {
  static PropTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  render() {
    const { history, routes, store } = this.props

    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={history} children={routes} />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App

