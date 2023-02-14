import React from 'react'
import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../Context/AuthContext'

const ProtectedRoute = ({children}) => {
    let {currentUser} = useUserAuth();
    if(!currentUser){
        return <Navigate to='/' />
    }
  return children
}

export default ProtectedRoute
