
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'

import SignUp from './pages/SignUp'
import LogIn from './pages/Login'
import ProtectedRoute from './ProtectedRoute'
function App() {
  

  return (
    <>
    

    <Router>
      <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route element={<ProtectedRoute/>}>
      <Route path='/home' element={<Home/>}/>
      </Route>
      
        <Route path='/about' element={<About/>}/>
       
      </Routes>
    </Router>
    
    

    </>
  )
}

export default App
