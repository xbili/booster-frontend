import React from 'react'
import LinearProgress from 'material-ui/LinearProgress'

const getPercentage = (count, totalCount) => (
  Math.round(count / totalCount * 100)
)

export const ChoicePopularity = ({ count, totalCount }) => (
  <LinearProgress
    mode='determinate'
    min={0}
    max={totalCount === 0 ? 100 : totalCount}
    value={count}
  />
)

export const PollChoice = ({ title, count, totalCount }) => (
  <div>
    <p>Title: {title}</p>
    <p>Progress: {`${getPercentage(count, totalCount)}%`}</p>
    <ChoicePopularity count={count} totalCount={totalCount} />
  </div>
)

export default PollChoice

