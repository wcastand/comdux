import React from 'react'
import ReactDOM from 'react-dom'
import omniscient from 'omniscient'

const component = omniscient.withDefaults({ jsx: true })

import { store, mixins, updateSums } from './mixins'
import App from './app'

import '../stylus/main.styl'

const Mixins = mixins.subscribe(render)
render()
function render(){
  updateSums()
  ReactDOM.render(<App store={store.cursor()} mixins={Mixins.fn} />, document.querySelector('#app'))
}
