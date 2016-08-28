import React from 'react'

import './PollChoice.scss'

export const PollChoice = ({ title, count, totalCount }) => {
  const percentage = totalCount === 0 ? 0 : Math.round(count / totalCount * 100)
  return (
    <div>
      <div className="choiceTitle">{title} ({count})</div>
      <div className="bar">
        <div style={{backgroundColor: '#FEBF34', height: '100%', width: `${percentage}%`}}></div>
      </div>
    </div>
  )
}

export default PollChoice
