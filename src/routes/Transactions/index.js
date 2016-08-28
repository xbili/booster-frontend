import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'business/:businessId/transactions',
  getComponent (nextState, cb) {
    const TransactionsViewContainer = require('./containers/TransactionsViewContainer').default
    const reducer = require('./modules/transactions').default

    injectReducer(store, { key: 'transactions', reducer })

    cb(null, TransactionsViewContainer)
  }
})

