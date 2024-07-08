import React from 'react'
import { betStatsElements } from '../data'
import Stat from './Stat'

function BetStats() {
  return (
    <React.Fragment>
      <div>
        <div className="row">
          {betStatsElements.map(({ id, subcover, valeur, title }) => (
            <Stat id={id} subcover={subcover} valeur={valeur} title={title} />
          ))}
        </div>
      </div>
    </React.Fragment>
  )
}

export default BetStats
