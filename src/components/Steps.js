import React from 'react'

function Steps({ id, text }) {
  return (
    <React.Fragment>
      <div key={id} className="col">
        <div>{id}</div>

        <p>{text}</p>
      </div>
    </React.Fragment>
  )
}

export default Steps
