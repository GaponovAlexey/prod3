import React from 'react'
import { AuthPorvider } from './components/hooks/Auth/AuthPorvider'
import { Main } from './components/Main'

function App() {
  return (
    <AuthPorvider>
      <div className='App'>
        <Main />
      </div>
    </AuthPorvider>
  )
}

export default App
