import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, startSubmit } from 'redux-form'

import LoginForm from '../components/LoginForm'

const LoginFormContainer = reduxForm({
  form: 'login',
  fields: ['username', 'password']
})(LoginForm)

const mapStateToProps = state => ({
  isLoading: state.isLoading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ startSubmit }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer)

