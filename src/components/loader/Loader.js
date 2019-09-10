import React from 'react'
import { RadarSpinner } from 'react-epic-spinners'

const Loader = ({ dimmer, spinner }) => {
  return (
      <div className={dimmer}>
        <RadarSpinner className={spinner} color='deepskyblue' />
      </div>
  )
}

export default Loader
