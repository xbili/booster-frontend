import React, { Component } from 'react'
import { Field, FieldArray } from 'redux-form'
import {
  TextField,
  SelectField,
  DatePicker
} from 'redux-form-material-ui'
import {
  Row,
  Col
} from 'react-bootstrap'
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
      <Col xs={12} key={uuid.v4()}>
        <Field name={`target${i}`} component={SelectField} hintText='Target Amount'>
          {_renderTargetItems()}
        </Field>
      </Col>
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
    <Col xs={8} style={{ paddingTop: '15px' }}>
      <Row style={{ marginBottom: '15px' }}>
        <Col xs={12}>
          <Field name='title' component={TextField} hintText='Title' fullWidth={true} />
        </Col>
        <Col xs={12}>
          <Field name='description' component={TextField} hintText='Description' fullWidth={true} />
        </Col>
        <Col xs={12}>
          <Field name='location' component={TextField} hintText='Location' fullWidth={true} />
        </Col>
      </Row>
      <Row style={{ marginBottom: '15px' }}>
        <Col xs={6}>
          <Field name='startDate' component={DatePicker} defaultValue={null} hintText='Start Date' />
        </Col>
        <Col xs={6}>
          <Field name='endDate' component={DatePicker} defaultValue={null} hintText='End Date' />
        </Col>
      </Row>
      <Row style={{ marginBottom: '15px' }}>
        <Col xs={12}>
          <Row>
            {_renderTargetInputs(numTargets)}
            <Col xs={12}>
              <RaisedButton label='Add Target' onClick={addTargetInput}/>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <RaisedButton type='submit' label='Create Campaign' primary={true} fullWidth={true} />
        </Col>
      </Row>
    </Col>
  </form>
)

export default CreateLureForm

