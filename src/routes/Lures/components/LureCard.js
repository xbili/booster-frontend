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
import RaisedButton from 'material-ui/RaisedButton'
import LinearProgress from 'material-ui/LinearProgress'
import { Link } from 'react-router'

const _getLureDate = lure => (
  `${moment(lure.start_date).format('MMMM Do YYYY')} to ${moment(lure.end_date).format('MMMM Do YYYY')}`
)

const _getTotalTargets = targets => (
  targets
    .map(target => target.amount)
    .reduce((prev, amount) => (prev + amount))
)

export const LureCard = ({ business, lure }) => (
  <Card style={{ minHeight: '60vh' }}>
    <CardMedia
      style={{
        alignItems: 'center'
      }}
      overlay={<CardTitle title={lure.title} subtitle={lure.location} />}
    >
      <img
        style={{
          objectFit: 'cover',
          height: '200px'
        }}
        src={lure.image_url}
      />
    </CardMedia>
    <CardText>
      {lure.description}
      <h3>Lure Progress</h3>
      <LinearProgress
        mode='determinate'
        min={0}
        max={_getTotalTargets(lure.targets)}
        value={lure.transactions.length}
      />
      <span>{lure.transactions.length} / {lure.target}</span>
    </CardText>
    <CardActions>
      <Link to={`/business/${business.id}/lure/${lure.id}`}><FlatButton label='View Lure' /></Link>
      <Link to={`/business/${business.id}/lure/${lure.id}`}><RaisedButton label='Delete Lure' /></Link>
    </CardActions>
  </Card>
)

export default LureCard
