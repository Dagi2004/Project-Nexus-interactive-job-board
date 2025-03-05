import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

export const ProtectedRoute:React.FC = () => {
    const token=localStorage.getItem("access")
    return(
        token ? <Outlet/> : <Navigate to="/login"/>   
    )   
  
}
export default ProtectedRoute