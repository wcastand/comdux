import actions from 'immstruct-actions'
import store from './store'
import moment from 'moment'

const titleHandler = actions.register('titleHandler', (e) => store.cursor(['inputs', 'title']).update(i => e.currentTarget.value))
const priceHandler = actions.register('priceHandler', (e) => store.cursor(['inputs', 'price']).update(i => e.currentTarget.value))
const addEntry = actions.register('addEntry', (e) => {
  e.preventDefault()
  let entry = {
    title: store.cursor(['inputs', 'title']).deref(),
    price: store.cursor(['inputs', 'price']).deref(),
    created_at: moment().format('DD-MM-YYYY')
  }
  let new_store = store.cursor('entries').update(i => [...i, entry])
  localStorage.setItem('entries', JSON.stringify(new_store.deref()))
  return new_store
})

const mixins = actions.combine(titleHandler, priceHandler, addEntry)
export default { store,  mixins }
