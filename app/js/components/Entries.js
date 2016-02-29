import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

import Entry from './Entry'
import moment from 'moment'

const Entries = component(({store, mixins:{ setMonthly, deleteEntry }} ) => (
  <ul className='list entries'>
    { store.get('entries')
      .filter(x => moment(x.created_at).month() === parseInt(store.cursor('inputs').get('currentMonth')))
      .map(i => (<Entry key={ 'entry-' + i.id }  parent='entries' onDoubleClick={ deleteEntry }  setMonthly={ setMonthly } entry={ i } />))
    }
  </ul>
  )
)

export default Entries
