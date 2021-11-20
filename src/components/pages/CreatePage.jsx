import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../hooks/Auth/useAuth'

export const CreatePage = () => {
const {signout} = useAuth()
const navigate = useNavigate()
  return (
    <div>
      create Posts
      <button onClick={() => signout(() => navigate('/', {replace: true}))} >Log out</button>
    </div>
  )
}
