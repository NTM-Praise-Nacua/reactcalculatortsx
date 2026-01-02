import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import ProtectedRoute from './components/auth/ProtectedRoute'
import PublicRoute from './components/auth/PublicRoute'

function App() {
  return (
    <>
    <div className='h-125 flex items-center justify-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <PublicRoute>
              <Login />
            </PublicRoute>  
            }
          ></Route>

          <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
