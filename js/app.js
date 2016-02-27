import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

import EntryInput from './components/EntryInput'

export default component(({ store, mixins: { onChangeHandler } }) => (
    <div>
      <EntryInput store={store.cursor('inputs')}  onChangeHandler={ onChangeHandler }/>
    </div>
  )
)
