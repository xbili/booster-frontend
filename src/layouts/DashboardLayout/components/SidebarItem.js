import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router'

require('./SidebarItem.scss')

const isIndexLink = (link) => link === '/'

export const SidebarItem = ({ to, label, iconName }) => (
  <Row className='sidebar__item'>
    <Link
      to={to}
      activeClassName='active'
      onlyActiveOnIndex={isIndexLink(to)}
    >
      <i className={`fa ${iconName}`} aria-hidden="true"></i>{label}
    </Link>
  </Row>
)

export default SidebarItem

