import React from 'react'
import { howItWorhsElements } from '../data'
import Steps from './Steps'

function HowItWorks() {
  return (
    <React.Fragment>
      <section>
        <h2>COMMENT ÇA MARCHE ?</h2>

        <p>
          TheBetWinners est fier de vous présenter son nouveau concept de «
          Pay-Per-Win » dans lequel vos résultats sont au centre de nos
          préoccupations. Oubliez les formules d'abonnement, maintenant vous
          payez seulement lorsque vous gagnez !
        </p>

        <div>
          <div className="row">
            {howItWorhsElements.map(({ id, text }) => (
              <Steps id={id} text={text} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default HowItWorks
