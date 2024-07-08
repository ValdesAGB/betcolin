import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 24rem;
  background-color: rgb(255 255 255 / 1);
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  height: 24rem;
  position: relative;
`

const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`

const Head = styled.div`
  background: linear-gradient(to bottom, #878787, #444444);
  color: rgb(255 255 255 / 1);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: none;
  height: 11rem;
  display: flex;
`

const Title = styled.div`
  gap: 0.5rem;
  align-items: center;
  display: flex;

  span {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`

const BetData = styled.div`
  gap: 1rem;
  align-items: center;
  width: 100%;
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

const Cote = styled.div`
  align-items: center;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;

  .coteTitle {
    font-size: 0.875rem;
    line-height: 1.25rem;
    opacity: 0.8;
  }

  .coteNumber {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
`

const Separator = styled.div`
  background-color: rgb(255 255 255 / 1);
  width: 1px;
  height: 100%;
`

const Gain = styled.div`
  align-items: center;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;

  .gainTitle {
    font-size: 0.875rem;
    line-height: 1.25rem;
    opacity: 0.8;
  }

  .gainNumber {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
`

const Foot = styled.div`
  justify-content: space-between;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;
`

function Card({ id, date, state, coteTotal, gain }) {
  return (
    <React.Fragment>
      <Container>
        <Content>
          <Head>
            <Title>
              <span>
                Prono du {date} - {state}
              </span>
            </Title>

            <BetData>
              <Cote>
                <span className="coteTitle">Côte Totale</span>
                <span className="coteNumber">{coteTotal}</span>
              </Cote>

              <Separator />

              <Gain>
                <span className="gainTitle">Gain Potentiel</span>
                <h3 className="gainNumber">+{gain}€</h3>
              </Gain>
            </BetData>
          </Head>
          <Foot>
            <h2>Débloquer</h2>
          </Foot>
        </Content>
      </Container>
    </React.Fragment>
  )
}

export default Card
