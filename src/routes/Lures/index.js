import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/business/:businessId/lures',
  getComponent (nextState, cb) {
    const LuresViewContainer = require('./containers/LuresViewContainer').default
    const reducer = require('./modules/lures').default

    injectReducer(store, { key: 'lures', reducer })

    cb(null, LuresViewContainer)
  }
})

