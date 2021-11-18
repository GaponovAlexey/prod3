import React from 'react'
import { Footer } from './components/base/Footer'
import { Headers } from './components/base/Headers'
import { Layout } from './components/Layout'
import { Main } from './components/Main'

function App() {
  return (
    <div className='App'>
      <Headers />
      <Layout />
      <Footer />
    </div>
  )
}

export default App
