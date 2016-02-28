import actions from 'immstruct-actions'
import store from './store'
import moment from 'moment'

const titleHandler = actions.register('titleHandler', (e) => store.cursor(['inputs', 'title']).update(i => e.currentTarget.value))
const priceHandler = actions.register('priceHandler', (e) => store.cursor(['inputs', 'price']).update(i => e.currentTarget.value))
const addEntry = actions.register('addEntry', (e) => {
  e.preventDefault()
  let entries = store.cursor().get('entries')
  let new_id = entries.reduce((x, y) => y.id >= x ? y.id + 1 : x, 0)
  let entry = {
    id: new_id,
    title: store.cursor(['inputs', 'title']).deref(),
    price: store.cursor(['inputs', 'price']).deref(),
    created_at: moment().format('DD-MM-YYYY')
  }

  let new_store = store.cursor('entries').update(old_entries => [...old_entries, entry])
  localStorage.setItem('entries', JSON.stringify(new_store.deref()))
  return new_store
})
const setMonthly = actions.register('setMonthly', (e) => {
  e.preventDefault()
  let entries = store.cursor().get('entries')
  let new_entries = entries.filter(entry => {
    if(entry.id === parseInt(e.currentTarget.dataset.id)){
      store.cursor('monthly').update(monthly => {
        localStorage.setItem('monthly', JSON.stringify([...monthly, entry]))
        return [...monthly, entry]
      })
    }
    else
      return entry
  })
  let new_store = store.cursor('entries').update(x => new_entries)
  localStorage.setItem('entries', JSON.stringify(new_entries))
  return new_entries
})

const mixins = actions.combine(titleHandler, priceHandler, addEntry, setMonthly)
export default { store,  mixins }
