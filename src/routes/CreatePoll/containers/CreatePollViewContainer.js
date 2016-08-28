import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../modules/createPoll'
import CreatePollView from '../components/CreatePollView'

const mapStateToProps = state => ({
  numChoices: state.createPoll.numChoices,
  business: state.createPoll.business
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePollView)

