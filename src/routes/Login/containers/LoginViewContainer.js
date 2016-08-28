import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from '../modules/login'
import LoginView from '../components/LoginView'

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  isAuthenticated: state.login.isAuthenticated
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)

