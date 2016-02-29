import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

const Entry = component(({ parent, entry, onDoubleClick, setMonthly }) => {
  let button = (parent === 'entries') ? <span data-id={entry.id} onClick={ setMonthly }>monthly</span> : ''
  return (
    <li className='item' data-id={ entry.id } onDoubleClick={ onDoubleClick } >
      <h4>{ entry.title }</h4>
      <h6>{ entry.price }</h6>
      { button }
    </li>
  )}
)

export default Entry
