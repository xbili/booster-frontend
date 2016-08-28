import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, startSubmit } from 'redux-form'

import CreatePollForm from '../components/CreatePollForm'
import { actionCreators } from '../modules/createPoll'

const CreatePollFormContainer = reduxForm({
  form: 'createpoll',
  fields: [
    'title',
    'start_date',
    'end_date',
    'choices[]'
  ]
})(CreatePollForm)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ startSubmit }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePollFormContainer)

