import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom'


// import { About } from './components/pages/About'
// import { Content } from './components/pages/Content'
import { Home } from './components/pages/Home'

export const Main = () => {
  return (
    <main className='container main'>
      <Router>
        <Route href='/' components={Home} />
      </Router>
    </main>
  )
}
