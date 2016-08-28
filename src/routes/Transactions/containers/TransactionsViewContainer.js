import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../modules/transactions'
import TransactionsView from '../components/TransactionsView'

const mapStateToProps = state => ({
  transactions: state.transactions.transactions,
  nameFilter: state.transactions.nameFilter
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsView)

