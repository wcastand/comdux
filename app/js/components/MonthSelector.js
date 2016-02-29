import component from 'omniscient'
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

const MonthSelector = component(({store, mixins:{ inputHandler } }) => (
    <select className='month-selector' value={ store.deref() } data-target='currentMonth' onChange= { inputHandler }>
      <option value={0}>Janvier</option>
      <option value={1}>Février</option>
      <option value={2}>Mars</option>
      <option value={3}>Avril</option>
      <option value={4}>Mai</option>
      <option value={5}>Juin</option>
      <option value={6}>Juillet</option>
      <option value={7}>Août</option>
      <option value={8}>Septembre</option>
      <option value={9}>Octobre</option>
      <option value={10}>Novembre</option>
      <option value={11}>Décembre</option>
    </select>
  )
)

export default MonthSelector
