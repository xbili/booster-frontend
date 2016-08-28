import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import uuid from 'uuid'

import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout'
import LoginRedirect from '../../../containers/LoginRedirect'
import PollCard from './PollCard'

export class PollsView extends Component {
  componentDidMount() {
    const { getPolls, getBusiness } = this.props.actions
    const { businessId } = this.props.params

    getBusiness(businessId)
    getPolls(businessId)
  }

  render() {
    const { polls, business } = this.props;
    const pollCards = polls.map(poll => (
      <Col
        style={{ marginBottom: '15px' }}
        xs={12}
        key={uuid.v4()}
      >
        <PollCard business={business} poll={poll} />
      </Col>
    ))
    return (
      <LoginRedirect>
        <DashboardLayout
          title='Active Polls'
          business={business}
          rightButton={`/business/${business.id}/poll`}
        >
          <Row style={{
            paddingTop: '30px',
            paddingBottom: '30px'
          }}>
            {pollCards}
          </Row>
        </DashboardLayout>
      </LoginRedirect>
    )
  }
}

export default PollsView

