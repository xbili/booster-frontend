import React from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router'

require('./Navbar.scss')
const boosterLogo = require('../assets/booster-logo-trans.png')

export const Navbar = ({ title, rightButton }) => (
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
      xs={rightButton ? 9 : 10}
    >
      <span>{title}</span>
    </Col>
    {rightButton ?
      <Col
        className='navbar__right-button'
        xs={1}
      >
        <Link to={rightButton}>+</Link>
      </Col> : ''}
  </Row>
)

export default Navbar

