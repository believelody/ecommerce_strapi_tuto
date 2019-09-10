import React from 'react'
import { RadarSpinner } from 'react-epic-spinners'

const Loader = ({ dimmer, spinner, size, show }) => {
  return (
      show &&
      <div className={dimmer}>
        <RadarSpinner size={size} className={spinner} color='deepskyblue' />
      </div>
  )
}

export default Loader
