import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

const Monthly = component(({store} ) => (
  <ul className='list monthly'>
    { store.deref().map((i, idx) => (<li key={'monthly-' + i.id} data-id={i.id} >{i.title} - {i.price}</li>)) }
  </ul>
  )
)

export default Monthly
