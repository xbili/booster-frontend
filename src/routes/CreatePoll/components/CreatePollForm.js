import React, { Component } from 'react'
import { Field, FieldArray } from 'redux-form'
import {
  TextField,
  SelectField,
  DatePicker
} from 'redux-form-material-ui'
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import uuid from 'uuid'

const _renderChoiceInputs = (numChoices) => {
  let choiceInputs = []
  for (let i = 1; i < numChoices+1; i++) {
    const choiceInput = (
      <Col xs={12}>
        <Field
          name={`choice${i}`}
          component={TextField}
          hintText={`Choice #${i}`}
          key={uuid.v4()} />
      </Col>
    )
    choiceInputs.push(choiceInput)
  }
  return choiceInputs
}


export const CreatePollForm = ({
  fields: {
    title,
    startDate,
    endDate,
    choices
  },
  handleSubmit,
  addChoiceInput,
  numChoices
}) => (
  <form onSubmit={handleSubmit}>
    <Grid>
      <Row>
        <Col xs={12}><Field name='title' component={TextField} hintText='Title' /></Col>
      </Row>
      <Row>
        <Col xs={6}>
          <Field name='startDate' component={DatePicker} defaultValue={null} hintText='Start Date' />
        </Col>
        <Col xs={6}>
          <Field name='endDate' component={DatePicker} defaultValue={null} hintText='End Date' />
        </Col>
      </Row>
      <Row>
        {_renderChoiceInputs(numChoices)}
        <Col xs={12}>
          <RaisedButton label='Add More Choices' onClick={addChoiceInput}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <RaisedButton type='submit' label='Create Poll' />
        </Col>
      </Row>
    </Grid>
  </form>
)

export default CreatePollForm

