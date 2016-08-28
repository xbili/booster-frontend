import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../modules/polls'
import PollsView from '../components/PollsView'

const mapStateToProps = state => ({
  polls: state.polls.polls,
  business: state.polls.business
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PollsView)

