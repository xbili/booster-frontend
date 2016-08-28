import React, { Component} from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import LoginRedirect from '../../../containers/LoginRedirect'
import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout'
import CreatePollFormContainer from '../containers/CreatePollFormContainer'

export class CreatePollView extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentDidMount() {
    const { getBusiness } = this.props.actions
    const { businessId } = this.props.params

    getBusiness(businessId)
  }

  render() {
    const { numChoices, business } = this.props
    const { addNewChoice } = this.props.actions
    const formProps = {
      onSubmit: this._handleSubmit.bind(this),
      numChoices,
      addChoiceInput: addNewChoice
    }

    return (
      <LoginRedirect>
        <DashboardLayout
          title='create new poll'
          business={business}
        >
          <CreatePollFormContainer {...formProps}/>
        </DashboardLayout>
      </LoginRedirect>
    );
  }

  _handleSubmit(values) {
    const { businessId } = this.props.params
    const { createPoll } = this.props.actions
    const {
      title,
      startDate,
      endDate
    } = values

    let choices = []
    for (var key in values) {
      if (key.substring(0, 6) === 'choice') {
        choices.push(values[key])
      }
    }

    const createPollParams = {
      title,
      startDate: JSON.stringify(startDate),
      endDate: JSON.stringify(endDate),
      choices
    }

    createPoll(businessId, createPollParams)
    this.context.router.push(`/business/${businessId}/polls`)
  }
}

export default CreatePollView

