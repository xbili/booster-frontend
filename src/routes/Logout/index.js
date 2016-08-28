import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'logout',
  getComponent (nextState, cb) {
    const Logout = require('./Logout').default

    cb(null, Logout)
  }
})

