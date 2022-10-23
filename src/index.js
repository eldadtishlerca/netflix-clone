import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './assets/styles/main.scss'
import { RootCmp } from './root-cmp'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootCmp />
    </Provider>
  </React.StrictMode>
)
