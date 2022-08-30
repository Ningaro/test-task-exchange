import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'

// Redux store
import store from './redux/store'

// root screen
import Root from './screens/Root'

// Styles
import './styles.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Root />
    </ReduxProvider>
  </StrictMode>
)
