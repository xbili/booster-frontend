import React, { Component} from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

import LoginRedirect from '../../../containers/LoginRedirect'
import CreateLureFormContainer from '../containers/CreateLureFormContainer'

export class CreateLureView extends Component {
  render() {
    const { numTargets } = this.props
    const { addNewTarget } = this.props.actions
    const formProps = {
      onSubmit: this._handleSubmit.bind(this),
      numTargets,
      addTargetInput: addNewTarget
    }

    return (
      <LoginRedirect>
        <h1>What's up, Redux?</h1>
        <p>CreateLureView represent</p>
        <CreateLureFormContainer {...formProps}/>
      </LoginRedirect>
    );
  }

  _handleSubmit(values) {
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
  }
}

export default CreateLureView

