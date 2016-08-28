import React, { Component } from 'react'
import { Field, FieldArray } from 'redux-form'
import {
  TextField,
  SelectField,
  DatePicker
} from 'redux-form-material-ui'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import uuid from 'uuid'

const _renderMenuItems = () => {
  let menuItems = []
  for (let i = 0; i < 10; i++) {
    menuItems.push(<MenuItem value={i} primaryText={i} key={uuid.v4()} />)
  }
  return menuItems
}

const _renderTargetItems = () => {
  let targetItems = []
  for (let i = 0; i < 3000; i+=100) {
    targetItems.push(<MenuItem value={i} primaryText={i} key={uuid.v4()} />)
  }
  return targetItems
}

const _renderTargetInputs = (numTargets) => {
  let targetInputs = []
  for (let i = 0; i < numTargets; i++) {
    const targetInput = (
      <Field name={`target${i}`} component={SelectField} key={uuid.v4()}>
        {_renderTargetItems()}
      </Field>
    )
    targetInputs.push(targetInput)
  }
  return targetInputs
}


export const CreateLureForm = ({
  fields: {
    title,
    description,
    location,
    startDate,
    endDate,
    targets
  },
  handleSubmit,
  addTargetInput,
  numTargets
}) => (
  <form onSubmit={handleSubmit}>
    <Field name='title' component={TextField} hintText='Title' />
    <Field name='description' component={TextField} hintText='Description' />
    <Field name='location' component={TextField} hintText='Location' />
    <Field name='startDate' component={DatePicker} defaultValue={null} hintText='Start Date' />
    <Field name='endDate' component={DatePicker} defaultValue={null} hintText='End Date' />
    {_renderTargetInputs(numTargets)}
    <RaisedButton label='Add Target' onClick={addTargetInput}/>

    <RaisedButton type='submit' label='Create Campaign' />
  </form>
)

export default CreateLureForm

