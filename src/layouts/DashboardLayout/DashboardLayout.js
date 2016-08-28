import React from 'react'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

export const DashboardLayout = ({
  title,
  business,
  rightButton,
  children
}) => (
  <Grid className="main" fluid={true}>
    <Navbar title={title} rightButton={rightButton} />
    <Row>
      <Sidebar business={business} />
      <Col
        className='content'
        style={{
          height: '100vh',
          overflowY: 'scroll'
        }}
        xs={10}
      >
        {children}
      </Col>
    </Row>
  </Grid>
)

export default DashboardLayout

