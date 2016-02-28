import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

const Entries = component(({store}) => (
  <ul className='list entries'>
    { store.deref().map((i, idx) => (<li key={idx}>{i.title} - {i.price}</li>)) }
  </ul>
  )
)

export default Entries
