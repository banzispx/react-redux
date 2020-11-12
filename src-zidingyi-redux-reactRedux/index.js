import React from 'react'
import ReactDom from 'react-dom'

import App from './App'
import store from './redux/store'
import {Provider} from './react-redux/index'
ReactDom.render(
  <Provider store = {store}>
    <App/>
  </Provider>
  , document.getElementById('root'))

// store.subscribe(() => {
//   ReactDom.render(<Provider store = {store}>
//     <App/>
//   </Provider>, document.getElementById('root'))
// })
