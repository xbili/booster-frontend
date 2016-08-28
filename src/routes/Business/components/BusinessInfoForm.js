import React, { Component } from 'react'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'

export const BusinessInfoForm = ({
  fields: {
    name,
    description,
    logoUrl
  },
  handleSubmit
}) => (
  <form onSubmit={handleSubmit}>
    <Field name='name' component={TextField} defaultValue={name} />
    <Field name='description' component={TextField} defaultValue={description} />
    <Field name='logoUrl' component={TextField} defaultValue={logoUrl} />
    <RaisedButton type='submit' label='Save' />
  </form>
)

export default BusinessInfoForm

