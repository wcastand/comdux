import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'

const EntryInput = component(({store, onChangeHandler}) => (
    <form>
      <input
        value={ store.cursor('title').deref()}
        onChange={ onChangeHandler } />
    </form>
  )
)

export default EntryInput
