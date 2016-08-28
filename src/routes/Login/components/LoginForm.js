import React from 'react'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'

export const LoginForm = (
  {
    fields: {
        username,
        password
    },
    handleSubmit
  }
) => (
  <form onSubmit={handleSubmit}>
    <Field name='username' component={TextField} hintText='Username' />
    <Field name='password' component={TextField} hintText='Password' />
    <RaisedButton type='submit' label='Login/Register' />
  </form>
)

export default LoginForm

