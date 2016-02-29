import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

import Entry from './Entry'

const Monthly = component(({store, mixins:{ deleteMonthly } } ) => (
  <ul className='list monthly'>
    { store.deref().map((i, idx) => (<Entry key={ 'monthly-' + i.id }  onDoubleClick={ deleteMonthly } entry={ i } />)) }
  </ul>
  )
)

export default Monthly
