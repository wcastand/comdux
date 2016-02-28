import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

import EntryInput from './components/EntryInput'
import Entries from './components/Entries'

export default component(({ store, mixins: { addEntry, titleHandler, priceHandler } }) => (
    <div>
      <EntryInput store={store.cursor('inputs')}  mixins={ {addEntry, titleHandler, priceHandler} }/>
      <Entries store={store.cursor('entries')} />
    </div>
  )
)
