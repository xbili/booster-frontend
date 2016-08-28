import React, { Component } from 'react'
import LoginRedirect from '../../containers/LoginRedirect'

export class Logout extends Component {
  componentWillMount() {
    localStorage.removeItem('hashToken')
    localStorage.removeItem('businessId')
    console.log('Removed credentials');
  }

  render() {
    return (<LoginRedirect />)
  }
}

export default Logout

