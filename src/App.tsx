
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import JobSearch from './pages/JobSearch'
import SignUp from './pages/SignUp'
import LogIn from './pages/Login'
import { SavedJobsProvider } from './components/context/SavedJobsContext'
import ProtectedRoute from './ProtectedRoute'
import SavedJobs from './pages/Saved'
import JobApplication from './pages/JobApplication'
function App() {
  

  return (
    <>
    

    <Router>
    <SavedJobsProvider>
      <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route element={<ProtectedRoute/>}>
      <Route path='/home' element={<Home/>}/>
      </Route>
      
        <Route path='/about' element={<About/>}/>
        <Route path='/job-search' element={<JobSearch/>}/>
       
        <Route path='/saved-jobs' element={<SavedJobs/>}/>
        <Route path='/job-application' element={<JobApplication/>}/>
        
       
       
      </Routes>
      </SavedJobsProvider>
    </Router>
    
    

    </>
  )
}

export default App
