import React from 'react'
import { Link } from 'react-router'

require('./Logout.scss')

export const Logout = ({}) => (
  <div className='sidebar__logout'>
    <Link to='/logout'>logout</Link>
  </div>
)

export default Logout

