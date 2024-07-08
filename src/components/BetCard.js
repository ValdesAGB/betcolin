import React from 'react'
import Card from './Card'
import { betCardElements } from '../data'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`

function BetCard() {
  return (
    <React.Fragment>
      <CardContainer>
        {betCardElements.map(({ id, date, state, coteTotal, gain }) => (
          <Card
            id={id}
            date={date}
            state={state}
            coteTotal={coteTotal}
            gain={gain}
          />
        ))}
      </CardContainer>
    </React.Fragment>
  )
}

export default BetCard
