import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MyContext, { userData } from './hooks/MyContext.jsx'


createRoot(document.getElementById('root')).render(
  <MyContext>
    <App />
  </MyContext>
)
