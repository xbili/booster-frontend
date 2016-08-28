import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../modules/business'
import BusinessView from '../components/BusinessView'

const mapStateToProps = state => ({
  isLoading: state.business.isLoading,
  isOwner: state.business.isOwner,
  editMode: state.business.editMode,
  lures: state.business.lures,
  polls: state.business.polls,
  business: state.business.business
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessView)

