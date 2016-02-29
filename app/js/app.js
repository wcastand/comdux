import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

import EntryInput from './components/EntryInput'
import Entries from './components/Entries'
import MonthSelector from './components/MonthSelector'
import Monthly from './components/Monthly'

export default component(({ store, mixins }) => (
  <div className='container'>
    <EntryInput store={store.cursor('inputs')}  mixins={mixins} />
    <div className='grid'>
      <div className='column'>
        <h2>Entries</h2>
        <MonthSelector store={ store.cursor(['inputs', 'currentMonth']) } mixins={ mixins } />
        <hr/>
        <Entries store={store} mixins={mixins} />
        <hr/>
        <span className='sum'>Total: {store.cursor('sum').deref().toFixed(2)}</span>
      </div>
      <div className='column'>
        <h2>Monthly</h2>
        <hr/>
        <Monthly store={store.cursor('monthly')} mixins={mixins} />
        <hr/>
        <span className='monthlysum'>Total Monthly: {store.cursor('monthlysum').deref().toFixed(2)}</span>
      </div>
    </div>
  </div>
  )
)
