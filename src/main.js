import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/createStore'
import App from './containers/App'

const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: ''
})

if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

const initialState = window.__INITIAL_STATE__
const store = createStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

const MOUNT_NODE = document.getElementById('root')
const render = () => {
  const routes = require('./routes/index').default(store)
  ReactDOM.render(
    <App
      store={store}
      history={history}
      routes={routes}
    />,
    MOUNT_NODE
  )
}

render()

