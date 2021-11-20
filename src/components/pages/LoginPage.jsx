import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../hooks/Auth/useAuth'

export const LoginPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin } = useAuth()

  const fromPage = location.state?.from?.pathname || '/'

  const handlerSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const user = form.username.value

    signin(user, () => navigate(fromPage, {replace: true}))
  }

  console.log(fromPage)
  return (
    <div>
      <h1>loginPage</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          Name: <input name='username' />
        </label>
        <button type='submit'>login</button>
      </form>
      {fromPage}
    </div>
  )
}
