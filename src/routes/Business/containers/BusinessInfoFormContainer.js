import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, startSubmit } from 'redux-form'

import BusinessInfoForm from '../components/BusinessInfoForm'

const BusinessInfoFormContainer = reduxForm({
  form: 'businessinfo',
  fields: ['name', 'description', 'logoUrl']
})(BusinessInfoForm)

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ startSubmit }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(BusinessInfoFormContainer)

