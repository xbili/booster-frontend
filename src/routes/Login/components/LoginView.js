import React, { Component } from 'react'
import { Router } from 'react-router'

import LoginFormContainer from '../containers/LoginFormContainer'

export class LoginView extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount() {
    if (localStorage.getItem('hashToken')) {
      this.context.router.push('/')
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (localStorage.getItem('hashToken')) {
      this.context.router.push('/')
    }
  }

  render() {
    return (
      <div>
        <LoginFormContainer onSubmit={this._handleSubmit.bind(this)}/>
      </div>
    )
  }

  _handleSubmit(values) {
    const { auth } = this.props.actions
    const { username, password } = values

    auth(username, password)
  }
}

export default LoginView

