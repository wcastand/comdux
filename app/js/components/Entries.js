import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

const Entries = component(({store, mixins:{ setMonthly }} ) => (
  <ul className='list entries'>
    { store.deref().map((i, idx) => (<li key={'entry-' + i.id} onDoubleClick={ setMonthly } data-id={i.id} >{i.title} - {i.price}</li>)) }
  </ul>
  )
)

export default Entries
