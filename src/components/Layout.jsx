import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Headers } from './base/Headers'
import { About } from './pages/About'
import { Content } from './pages/Content'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Headers />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/count' element={<Content />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
