import React from 'react'
import { Paper } from 'material-ui'
import {
  Row,
  Col
} from 'react-bootstrap'
import uuid from 'uuid'
import moment from 'moment'

import PollChoice from './PollChoice'
import './PollCard.scss'

const _getPollSubtitle = (poll) => (
  `${moment(poll.start_date).format('MMMM Do YYYY')} to ${moment(poll.end_date).format('MMMM Do YYYY')}`
)

const _getTotalCount = (choices) => (
  choices
    .map(choice => choice.count)
    .reduce((prev, choiceCount) => (prev + choiceCount), 0)
)

const _getPollChoices = (choices) => {
  const totalCount = _getTotalCount(choices)
  return choices.map(choice => (
      <div key={uuid.v4()} className="choice">
        <PollChoice
          title={choice.title}
          count={choice.count}
          totalCount={totalCount}
        />
      </div>
    )
  )
}

export const PollCard = ({ business, poll }) => (
  <Paper style={{borderRadius: '5px', marginBottom: '36px'}}>
    <Row>
      <Col xs={12}>
        <div className="cardTitle">{poll.title}</div>
        {_getPollChoices(poll.choices)}
      </Col>
    </Row>
  </Paper>
)

export default PollCard
