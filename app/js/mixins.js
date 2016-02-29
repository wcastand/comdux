import actions from 'immstruct-actions'
import R from 'ramda'
import moment from 'moment'
import store from './store'

const log = R.curry((msg, x) => {
  console.log(msg, x)
  return x
})

const addPrice     = (x, y) => x + parseFloat(y.price)
const calculateSum = R.reduce(addPrice, 0)

const isMax    = (x, y) => y.id > x ? y.id : x
const getNewId = R.compose(R.inc, R.reduce(isMax, 0))
const addNewEntry   = R.curry((entry, arr) => {
  let new_id = getNewId(arr)
  let new_entry = R.merge(entry, {id: new_id || 0})
  return R.append(new_entry, arr)
})

const setValue = R.curry((e) => store.cursor(['inputs', e.currentTarget.dataset.target]).update(x => e.currentTarget.value))
const inputHandler = actions.register('inputHandler', setValue)

const filterByMonth = R.curry((m) => R.filter(x => moment(x.created_at).month() === m))
const filterHandler = actions.register('filterHandler', () => {
  let month = parseInt(store.cursor('inputs').get('currentMonth'))
  filterByMonth(month)
})

const deleteById    = R.curry((id, arr) => R.filter(x => x.id !== id)(arr))
const findById      = R.curry((id, arr) => R.filter(x => x.id === id)(arr)[0])
const updateSums = R.curry(() => {
  let month = parseInt(store.cursor('inputs').get('currentMonth'))
  let e = calculateSum(filterByMonth(month)(store.cursor().get('entries')))
  let m = calculateSum(store.cursor().get('monthly'))

  store.cursor('monthlysum').set(m)
  store.cursor('sum').set(e + m)
})

const addEntry = actions.register('addEntry', (e) => {
  e.preventDefault()
  e.stopPropagation()
  let entry = {
    id: 0,
    title: store.cursor(['inputs', 'title']).deref(),
    price: store.cursor(['inputs', 'price']).deref(),
    created_at: store.cursor(['inputs', 'created_at']).deref(),
  }
  let new_entries = store.cursor('entries').update(x => addNewEntry(entry, x))

  localStorage.setItem('entries', JSON.stringify(new_entries.deref()))
  return false
})


const setMonthly = actions.register('setMonthly', (e) => {
  e.preventDefault()
  e.stopPropagation()
  let id = parseFloat(e.currentTarget.dataset.id)

  let new_entries = store.cursor('entries')
  .update(x => {
    let new_monthly = store.cursor('monthly').update(y => addNewEntry(findById(id, x), y))
    let result = deleteById(id, x)

    localStorage.setItem('monthly', JSON.stringify(new_monthly.deref()))
    return result
  })

  localStorage.setItem('entries', JSON.stringify(new_entries.deref()))
  return false
})

const deleteEntry = actions.register('deleteEntry', (e) => {
  e.preventDefault()
  e.stopPropagation()

  let id = parseFloat(e.currentTarget.dataset.id)
  let new_entries = store.cursor('entries').update(x => deleteById(id, x))

  localStorage.setItem('entries', JSON.stringify(new_entries.deref()))
  return false
})

const deleteMonthly = actions.register('deleteMonthly', (e) => {
  e.preventDefault()
  e.stopPropagation()

  let id = parseFloat(e.currentTarget.dataset.id)
  let new_monthly = store.cursor('monthly').update(x => deleteById(id, x))

  localStorage.setItem('monthly', JSON.stringify(new_monthly.deref()))
  return false
})

const mixins = actions.combine(
  inputHandler,
  addEntry,
  setMonthly,
  deleteMonthly,
  deleteEntry,
  filterHandler,
)

export default { store,  mixins, updateSums }
