import React, { Component } from 'react'

export class LoginRedirect extends Component {
  static contextTypes = {
    router: React.PropTypes.object
  }

  componentWillMount() {
    if (localStorage.getItem('hashToken') === null) {
      this.context.router.push('/login')
    }
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default LoginRedirect

