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
      <PollCard key={uuid.v4()} business={business} poll={poll} />
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
            <Col
              style={{ marginBottom: '80px', marginTop: '32px', marginLeft: '48px' }}
              xs={8}
            >
              {pollCards}
            </Col>
          </Row>
        </DashboardLayout>
      </LoginRedirect>
    )
  }
}

export default PollsView
