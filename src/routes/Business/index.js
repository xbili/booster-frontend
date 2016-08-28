import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'business/:businessId',
  getComponent (nextState, cb) {
    const BusinessViewContainer = require('./containers/BusinessViewContainer').default
    const reducer = require('./modules/business').default

    injectReducer(store, { key: 'business', reducer })

    cb(null, BusinessViewContainer)
  }
})

