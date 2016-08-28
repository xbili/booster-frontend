import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'business/:businessId/poll',
  getComponent (nextState, cb) {
    const CreatePollViewContainer = require('./containers/CreatePollViewContainer').default
    const reducer = require('./modules/createPoll').default

    injectReducer(store, { key: 'createPoll', reducer })

    cb(null, CreatePollViewContainer)
  }
})

