import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import 'normalize.css'
import './index.scss'

import { App } from './components/App'
import { aviasales } from './services/aviasales'

const store = createStore(aviasales)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
