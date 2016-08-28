import React, { Component} from 'react'
import { Link } from 'react-router'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import uuid from 'uuid'

import ReactHighcharts from 'react-highcharts';

import DashboardLayout from '../../../layouts/DashboardLayout/DashboardLayout'
import LoginRedirect from '../../../containers/LoginRedirect'

const chartConfig = {
  xAxis: {
  },
  yAxis: {
    title: {
      enabled: false
    }
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }],
  chart: {
    height: 365
  },
  legend: {
    enabled: false
  },
  title: {
    style: {
      display: 'none'
    }
  }
};

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
          <div style={{marginLeft: '36px'}}>
            <Row style={{textAlign: 'center', marginTop: '40px', marginBottom: '36px'}}>
              <Col xs={2}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#17B3DD', color: '#FFFFFF', borderRadius: '5px', minHeight: '130px'}}>
                  <div style={{fontSize: '3em', fontWeight: 'bold'}}>5</div>
                  <div style={{fontSize: '0.9em'}}>ongoing campaigns</div>
                </div>
              </Col>
              <Col xs={2}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF4A5D', color: '#FFFFFF', borderRadius: '5px', minHeight: '130px'}}>
                  <div style={{fontSize: '3em', fontWeight: 'bold'}}>300</div>
                  <div style={{fontSize: '0.9em'}}>purchases</div>
                </div>
              </Col>
              <Col xs={2}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1BBC9B', color: '#FFFFFF', borderRadius: '5px', minHeight: '130px'}}>
                  <div style={{fontSize: '3em', fontWeight: 'bold'}}>2</div>
                  <div style={{fontSize: '0.9em'}}>ongoing polls</div>
                </div>
              </Col>
              <Col xs={2}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#764EBE', color: '#FFFFFF', borderRadius: '5px', minHeight: '130px'}}>
                  <div style={{fontSize: '3em', fontWeight: 'bold'}}>71</div>
                  <div style={{fontSize: '0.9em'}}>poll respondents</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <div style={{height: '500px', backgroundColor: 'white', borderRadius: '5px', marginBottom: '150px'}}>
                <Col xs={12} style={{height: '36px', backgroundColor: '#FEBF34', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', display: 'flex', alignItems: 'center'}}>
                  <span style={{fontFamily: 'Cairo, sans-serif', fontWeight: 'bold', fontSize: '1.4em', letterSpacing: '1px'}}>REVENUE</span>
                </Col>
                <Col xs={12} style={{marginTop: '20px', marginBottom: '10px'}}>
                  <ReactHighcharts config={chartConfig}/>
                </Col>
                <Row style={{textAlign: 'center'}}>
                  <Col xs={4}>
                    <div style={{color: '#B3B3B3'}}>LAST WEEK</div>
                    <div style={{fontSize: '2.5em', fontWeight: 'bold'}}>$3,216</div>
                  </Col>
                  <Col xs={4}>
                    <div style={{color: '#B3B3B3'}}>LAST MONTH</div>
                    <div style={{fontSize: '2.5em', fontWeight: 'bold'}}>$15,234</div>
                  </Col>
                  <Col xs={4}>
                    <div style={{color: '#B3B3B3'}}>TOTAL REVENUE</div>
                    <div style={{fontSize: '2.5em', fontWeight: 'bold'}}>$58,579</div>
                  </Col>
                </Row>
                </div>
              </Col>
            </Row>
          </div>
        </DashboardLayout>
      </LoginRedirect>
    );
  }
}

export default HomeView
