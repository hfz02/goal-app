import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  )
}

export default App