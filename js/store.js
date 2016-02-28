import immstruct from 'immstruct'

let entries = JSON.parse(localStorage.getItem('entries')) || []
let montly = JSON.parse(localStorage.getItem('montly')) || []

let initialState = {
  entries: [],
  monthly: [],
  inputs: {
    title: '',
    price: ''
  }
}

const store = immstruct(initialState)
entries.map(entry => store.cursor('entries').update(i => [...i, entry]))
montly.map(m => store.cursor('montly').update(i => [...i, m]))

export default store
