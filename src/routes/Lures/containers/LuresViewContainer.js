import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../modules/lures'
import LuresView from '../components/LuresView'

const mapStateToProps = state => ({
  lures: state.lures.lures,
  business: state.lures.business
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LuresView)

