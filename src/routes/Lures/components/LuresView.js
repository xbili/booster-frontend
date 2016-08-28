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
      <LureCard
        business={business}
        lure={lure}
        key={uuid.v4()}
      />
    ))

    return (
      <LoginRedirect>
        <DashboardLayout
          title='Active Campaigns'
          business={business}
          rightButton={`/business/${business.id}/lure`}
        >
          <Row style={{
            paddingTop: '30px',
            paddingBottom: '30px'
          }}>
            <Col
              style={{ marginBottom: '80px', marginTop: '32px', marginLeft: '48px' }}
              xs={6}
            >
              {lureCards}
            </Col>
          </Row>
        </DashboardLayout>
      </LoginRedirect>
    )
  }
}

export default LuresView
