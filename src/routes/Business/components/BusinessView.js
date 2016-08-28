import React, { Component} from 'react'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import uuid from 'uuid'

import LoginRedirect from '../../../containers/LoginRedirect'
import BusinessInfo from '../components/BusinessInfo'
import BusinessInfoFormContainer from '../containers/BusinessInfoFormContainer'

export class BusinessView extends Component {
  componentWillMount() {
    const { checkIsOwner } = this.props.actions
    const { businessId } = this.props.params

    checkIsOwner(businessId)
  }

  componentDidMount() {
    const {
      getLures,
      getPolls,
      getBusiness
    } = this.props.actions
    const { businessId } = this.props.params

    getLures(businessId)
    getPolls(businessId)
    getBusiness(businessId)
  }

  render() {
    const { lures, polls, business, isOwner, editMode } = this.props
    const { editBusiness } = this.props.actions
    const businessInfo = <BusinessInfo isOwner={isOwner} {...business} />
    const businessInfoForm = <BusinessInfoFormContainer {...{fields: {...business}}} onSubmit={this._saveInfo.bind(this)} />
    const editButton = <RaisedButton label='Edit Information' onClick={editBusiness} />

    const lureCards = lures.map(lure => (
      <p key={uuid.v4()}>{lure.id}</p>
    ))

    const pollCards = polls.map(poll => (
      <p key={uuid.v4()}>{poll.id}</p>
    ))

    return (
      <LoginRedirect>
        <h1>What's up, Redux?</h1>
        <p>BusinessView represent</p>
        { editMode ? businessInfoForm : businessInfo }
        { isOwner && !editMode ? editButton : '' }
        <Link to="/profile">Visit Profile</Link>
        {lures.length === 0 ? <p>No active lures</p> : lureCards}
        {polls.length === 0 ? <p>No active polls</p> : pollCards}
      </LoginRedirect>
    );
  }

  _saveInfo(values) {
    const { id } = this.props.business
    const { updateBusiness, editBusinessFinish } = this.props.actions
    const { name, description, logoUrl } = values

    updateBusiness(id, name, description, logoUrl)
    editBusinessFinish()
  }
}

export default BusinessView

