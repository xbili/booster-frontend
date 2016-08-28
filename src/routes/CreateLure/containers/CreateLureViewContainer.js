import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../modules/createLure'
import CreateLureView from '../components/CreateLureView'

const mapStateToProps = state => ({
  numTargets: state.createLure.numTargets
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateLureView)

