import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'login',
  getComponent (nextState, cb) {
    const LoginViewContainer = require('./containers/LoginViewContainer').default
    const reducer = require('./modules/login').default

    injectReducer(store, { key: 'login', reducer })

    cb(null, LoginViewContainer)
  }
})

