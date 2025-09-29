import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(

  /*
  The provider is a functionality provided by `react-redux`
  which is a library used to link react and redux. The provider wraps
  the entire app which gives direct access to store to all its children.
  Store in turn have the access to all the states and actions (slices)
  */

  <Provider store={store}>
    <App />
  </Provider>,
)
