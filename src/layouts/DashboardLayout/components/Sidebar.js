import React from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router'

import Logout from './Logout'
import SidebarItem from './SidebarItem'

require('./sidebar.scss')

export const Sidebar = ({ business }) => (
  <Col
    className='sidebar'
    xs={2}
  >
    <Row>
      <Col
        className='sidebar__header'
        xs={12}
      >
        <Row><img src={business.logo_url} /></Row>
        <Row><span>{business.name}</span></Row>
        <Row><Logout /></Row>
      </Col>
      <Col
        xs={12}
      >
        <SidebarItem to='/' label='overview' iconName='fa-home' />
        <SidebarItem to={`/business/${business.id}/lures`} label='campaigns' iconName='fa-tachometer' />
        <SidebarItem to={`/business/${business.id}/polls`} label='polls' iconName='fa-list' />
      </Col>
    </Row>
  </Col>
)

export default Sidebar

