import React from 'react'
import { useParams, useHistory, Routes, Route } from 'react-router'
import { Headers } from './base/Headers'
import { About } from './pages/About'
import { Content } from './pages/Content'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { NotFound } from './pages/NotFound'

export const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Headers />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='count' element={<Content />} />
          <Route path='movies/:title' element={<Movies />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <main className='container main'>

      </main>
    </div>
  )
}
