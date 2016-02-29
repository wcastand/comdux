import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

const EntryInput = component(({store, mixins: { addEntry, inputHandler } }) => (
    <form className='add-entry' onSubmit={ addEntry }>
      <input placeholder='Titre...' type='text' value={ store.cursor('title').deref() } data-target='title' onChange={ inputHandler } />
      <input placeholder='Prix...'  type='number' step="any" value={ store.cursor('price').deref() } data-target='price' onChange={ inputHandler } />
      <input placeholder='Date...'  type='date' value={ store.cursor('created_at').deref() } data-target='created_at' onChange={ inputHandler } />
      <input type='submit' />
    </form>
  )
)

export default EntryInput
