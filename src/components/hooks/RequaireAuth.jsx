import React from 'react'
import { Navigate, useLocation } from 'react-router'
import { useAuth } from './Auth/useAuth'

export const RequaireAuth = ({ children }) => {
  const location = useLocation()
  const {user} = useAuth()
  if (!user) {
    // return <Navigate to='/login' state={{ from: location }} />
    return <Navigate to='/login' state={{from: location}} />
  }
  return children
}
