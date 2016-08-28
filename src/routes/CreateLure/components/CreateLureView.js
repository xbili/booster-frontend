import React, { Component} from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

import LoginRedirect from '../../../containers/LoginRedirect'
import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout'
import CreateLureFormContainer from '../containers/CreateLureFormContainer'

export class CreateLureView extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentDidMount() {
    const { getBusiness } = this.props.actions
    const { businessId } = this.props.params

    getBusiness(businessId)
  }

  render() {
    const { numTargets, business } = this.props
    const { addNewTarget } = this.props.actions
    const formProps = {
      onSubmit: this._handleSubmit.bind(this),
      numTargets,
      addTargetInput: addNewTarget
    }

    return (
      <LoginRedirect>
        <DashboardLayout
          title='Create New Campaign'
          business={business}
        >
          <CreateLureFormContainer {...formProps} />
        </DashboardLayout>
      </LoginRedirect>
    );
  }

  _handleSubmit(values) {
    const { business } = this.props
    const { createLure } = this.props.actions
    const {
      title,
      description,
      location,
      startDate,
      endDate
    } = values

    let targets = []
    for (var key in values) {
      if (key.substring(0, 6) === 'target') {
        const target = {
          level: parseInt(key.substring(6)) + 1,
          amount: values[key]
        }
        targets.push(target)
      }
    }

    const createLureParams = {
      title,
      description,
      location,
      startDate: JSON.stringify(startDate),
      endDate: JSON.stringify(endDate),
      targets
    }

    createLure({...createLureParams})
    this.context.router.push(`/business/${business.id}/lures`)
  }
}

export default CreateLureView

