import React, { Component } from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import uuid from 'uuid'

import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout'
import LoginRedirect from '../../../containers/LoginRedirect'
import LureCard from './LureCard'

export class LuresView extends Component {
  componentDidMount() {
    const { getLures, getBusiness } = this.props.actions
    const businessId = localStorage.getItem('businessId')

    getBusiness(businessId)
    getLures(businessId)
  }

  render() {
    const { lures, business } = this.props;
    const lureCards = lures.map(lure => (
      <Col
        style={{ marginBottom: '15px' }}
        xs={12}
        key={uuid.v4()}
      >
        <LureCard
          business={business}
          lure={lure}
        />
      </Col>
    ))

    return (
      <LoginRedirect>
        <DashboardLayout
          title='Active Campaigns'
          business={business}
        >
          <Row style={{
            paddingTop: '30px',
            paddingBottom: '30px'
          }}>
            {lureCards}
          </Row>
        </DashboardLayout>
      </LoginRedirect>
    )
  }
}

export default LuresView

