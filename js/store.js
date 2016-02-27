import immstruct from 'immstruct'

const store = immstruct({
  entries: [],
  monthly: [],
  inputs: {
    title: '',
    price: ''
  }
})

export default store
