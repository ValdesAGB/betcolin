import React from 'react'

function Stat({ id, subcover, title, valeur }) {
  return (
    <React.Fragment>
      <div className="col" key={id}>
        <img src={subcover} alt={title} />

        <h2>{valeur}</h2>

        <p>{title}</p>
      </div>
    </React.Fragment>
  )
}

export default Stat
