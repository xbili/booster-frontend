import React from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

require('./Navbar.scss')
const boosterLogo = require('../assets/booster-logo-trans.png')

export const Navbar = ({ title }) => (
  <Row>
    <Col
      className='navbar__logo'
      xs={2}
    >
      <img src={boosterLogo} />
      <span>Booster</span>
    </Col>
    <Col
      className='navbar__title'
      xs={10}
    >
      <span>{title}</span>
    </Col>
  </Row>
)

export default Navbar

