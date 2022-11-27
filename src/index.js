import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import 'normalize.css'
import './index.scss'

import { App } from './components/App'
import { ErrorBoundry } from './components/Error-boundry'
import { AviasalesServiceProvider } from './components/aviasales-service-context'

import { store } from './store'
import { aviasalesService } from './services/aviasales-service'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <AviasalesServiceProvider value={aviasalesService}>
        <App />
      </AviasalesServiceProvider>
    </ErrorBoundry>
  </Provider>
)
