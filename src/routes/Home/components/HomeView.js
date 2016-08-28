import React, { Component} from 'react'
import { Link } from 'react-router'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import uuid from 'uuid'

import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout'
import LoginRedirect from '../../../containers/LoginRedirect'

export class HomeView extends Component {
  componentDidMount() {
    const { getBusiness } = this.props.actions
    const businessId = localStorage.getItem('businessId')

    getBusiness(businessId)
  }

  render() {
    const { business } = this.props;

    return (
      <LoginRedirect>
        <DashboardLayout
          title='Overall Summary'
          business={business}
        >
          <Row>
            <Col xs={12}>
              <h1>Welcome to Booster!</h1>
            </Col>
          </Row>
        </DashboardLayout>
      </LoginRedirect>
    );
  }
}

export default HomeView

