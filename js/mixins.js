import actions from 'immstruct-actions'
import store from './store'

const onChangeHandler = (e) => store.cursor(['inputs', 'title']).update(i => e.currentTarget.value)

const mixins = actions.register(onChangeHandler)

export default { store,  mixins }
