import { useContext } from 'react'
import { AuthContext } from './AuthPorvider'

export const useAuth = () => {
  return useContext(AuthContext)
}
