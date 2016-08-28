import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, startSubmit } from 'redux-form'

import CreateLureForm from '../components/CreateLureForm'
import { actionCreators } from '../modules/createLure'

const CreateLureFormContainer = reduxForm({
  form: 'createlure',
  fields: [
    'title',
    'description',
    'location',
    'start_date',
    'end_date',
    'targets[]'
  ]
})(CreateLureForm)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ startSubmit }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateLureFormContainer)

