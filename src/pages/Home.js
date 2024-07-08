import React from 'react'
import BetCard from '../components/BetCard'
import BetStats from '../components/BetStats'
import HowItWorks from '../components/HowItWorks'
import styled from 'styled-components'

const Section = styled.section`
  background-image: url('https://thebetwinners.com/img/banner-bg.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 24rem;
`

const TitleElement = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;

  h3 {
    color: rgb(250 204 21 / 1);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-bottom: 0.5rem;
  }

  h1 {
    text-shadow: 0 2px 0 rgb(134 145 149 / 50%), 0 0 2px #eec001;
    font-size: 3rem;
    line-height: 1;
    color: rgb(255 255 255 / 1);
    text-transform: uppercase;
    font-weight: 900;

    span {
      color: rgb(250 204 21 / 1);
    }
  }
`

const Bet = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  gap: 3.5rem;
  display: flex;
  flex-direction: column;
  m//argin-top: -9rem;
`

const BetCardContainer = styled.div``
function Home() {
  return (
    <React.Fragment>
      <Section>
        <div className="container">
          <TitleElement>
            <h3>Nouveau Concept</h3>
            <h1>
              PAYEZ UNIQUEMENT LORSQUE VOUS <span>GAGNEZ</span> !
            </h1>
          </TitleElement>

          <Bet>
            <BetCardContainer>
              <BetCard />
            </BetCardContainer>
            <div>
              <button>
                <a href="#">Voir nos pronostics</a>
              </button>
            </div>
            <div>
              <BetStats />
            </div>
          </Bet>
          <div>
            <HowItWorks />
          </div>
        </div>
      </Section>
    </React.Fragment>
  )
}

export default Home
