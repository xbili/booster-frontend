import React from 'react'
import {
  Card,
  CardHeader,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import uuid from 'uuid'
import moment from 'moment'

import PollChoice from './PollChoice'

const _getPollSubtitle = (poll) => (
  `${moment(poll.start_date).format('MMMM Do YYYY')} to ${moment(poll.end_date).format('MMMM Do YYYY')}`
)

const _getTotalCount = (choices) => (
  choices
    .map(choice => choice.count)
    .reduce((prev, choiceCount) => (prev + choiceCount))
)

const _getPollChoices = (choices) => {
  return choices.map(choice => (
      <PollChoice
        key={uuid.v4()}
        title={choice.title}
        count={choice.count}
        totalCount={_getTotalCount(choices)}
      />
    )
  )
}

export const PollCard = ({ business, poll }) => (
  <Card style={{ minheight: '80vh' }}>
    <CardHeader
      title={poll.title}
      subtitle={_getPollSubtitle(poll)}
    />
    <CardText>
      {_getPollChoices(poll.choices)}
    </CardText>
    <CardActions>
      <Link to='/'><FlatButton label='View Poll' /></Link>
    </CardActions>
  </Card>
)

export default PollCard

