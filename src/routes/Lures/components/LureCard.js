import React from 'react'
import {
  Paper,
  CircularProgress
} from 'material-ui'
import {
  Row,
  Col
} from 'react-bootstrap'
import moment from 'moment'

import './LureCard.scss'

const _getTotalPurchased = transactions => (
  transactions
    .map(transaction => transaction.amount)
    .reduce((prev, amount) => (prev + amount), 0)
)

const _getPercentProgress = lure => {
  const start = moment(lure.start_date)
  const end = moment(lure.end_date)
  const current = moment(new Date())
  const percent = current.diff(start) / end.diff(start) * 100
  return percent > 100 ? 100 : percent
}

const _renderTargets = (totalPurchased, targets) => (
  targets
    .map((target, i) => (
      <div className={target.amount <= totalPurchased ? "passedTarget" : "target"} key={i}>
        {target.amount}
      </div>
    )
  )
)

export const LureCard = ({ business, lure }) => {
  const totalPurchased = _getTotalPurchased(lure.transactions)
  const percentProgress = _getPercentProgress(lure)
  return (
    <Paper style={{borderRadius: '5px', marginBottom: '36px'}}>
      <Row>
        <Col xs={12}>
          <div className="cardTitle">{lure.title}</div>
          <Row className="cardContent">
            <Col xs={5}>
              <div className="leftContent">
                <div className="leftNumbers">
                  <div className="totalPurchased">
                    {totalPurchased}
                  </div>
                  <div className="targets">
                    {_renderTargets(totalPurchased, lure.targets)}
                  </div>
                </div>
                <div className="purchasedLabel">purchased</div>
              </div>
            </Col>
            <Col xs={2} xsOffset={5}>
              <div className="rightContent">
                <div className={percentProgress >= 100 ? 'passedTimeToDate' : 'timeToDate'}>
                  {moment(lure.end_date).toNow(true)}
                </div>
                <CircularProgress
                  mode="determinate"
                  value={percentProgress}
                  color={percentProgress >= 100 ? '#FF4A5D' : '#1BBC9B'}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Paper>
  )
}

export default LureCard
