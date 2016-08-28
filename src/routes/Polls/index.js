import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/business/:businessId/polls',
  getComponent (nextState, cb) {
    const PollsViewContainer = require('./containers/PollsViewContainer').default
    const reducer = require('./modules/polls').default

    injectReducer(store, { key: 'polls', reducer })

    cb(null, PollsViewContainer)
  }
})

