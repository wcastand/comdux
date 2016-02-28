import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

const EntryInput = component(({store, mixins: { addEntry, titleHandler, priceHandler} }) => (
    <form className='add-entry' onSubmit={ addEntry }>
      <input placeholder='Titre...' type='text' value={ store.cursor('title').deref()} onChange={ titleHandler } />
      <input placeholder='Prix...' type='number' step="any" value={ store.cursor('price').deref()} onChange={ priceHandler } />
      <input placeholder='Date...' type='date' value={ moment().format('DD-MM-YYYY') } />
      <input type='submit' />
    </form>
  )
)

export default EntryInput
