import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import { useUser } from './components/context/UserContext'
export const ProtectedRoute:React.FC = () => {
    const{username}=useUser()
    const isAuthenticated=!username;
    return isAuthenticated  ? <Outlet/> : <Navigate to="/login"/>   
    
  
}
export default ProtectedRoute