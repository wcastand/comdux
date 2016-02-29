import immstruct from 'immstruct'
import moment from 'moment'

let entries = JSON.parse(localStorage.getItem('entries')) || []
let monthly = JSON.parse(localStorage.getItem('monthly')) || []

let initialState = {
  entries: [],
  monthly: [],
  inputs: {
    title: '',
    price: '',
    created_at: moment().format('YYYY-MM-DD'),
    currentMonth: moment().month(),
  },
  monthlysum: 0,
  sum: 0,
}

const store = immstruct(initialState)
entries.map(entry => store.cursor('entries').update(i => [...i, entry]))
monthly.map(m => store.cursor('monthly').update(i => [...i, m]))

export default store
