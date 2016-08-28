import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'business/:businessId/lure',
  getComponent (nextState, cb) {
    const CreateLureViewContainer = require('./containers/CreateLureViewContainer').default
    const reducer = require('./modules/createLure').default

    injectReducer(store, { key: 'createLure', reducer })

    cb(null, CreateLureViewContainer)
  }
})

