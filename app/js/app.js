import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

import EntryInput from './components/EntryInput'
import Entries from './components/Entries'

import Monthly from './components/Monthly'

export default component(({ store, mixins }) => (
  <div className='container'>
    <EntryInput store={store.cursor('inputs')}  mixins={mixins} />
    <div className='grid'>
      <div className='column'>
        <h2>Entries</h2>
        <hr/>
        <Entries store={store.cursor('entries')} mixins={mixins} />
      </div>
      <div className='column'>
        <h2>Monthly</h2>
        <hr/>
        <Monthly store={store.cursor('monthly')} mixins={mixins} />
      </div>
    </div>
  </div>
  )
)
