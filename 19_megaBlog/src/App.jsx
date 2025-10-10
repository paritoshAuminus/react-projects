import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './config/store/authSlice'
import { Footer, Header } from './components'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (condition) {
          dispatch(login({ userData }))
        }
      })
      .catch(() => dispatch(logout()))
      .finally(() => setLoading(false))
  }, [])


  return (
    <>
      {!loading ?
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-full block'>
            <Header />
            {/* All the routes */}
            <Footer />
          </div>
        </div>
        : null}
    </>
  )
}

export default App
