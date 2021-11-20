import React from 'react'
import { Routes, Route  } from 'react-router'
import { Footer } from './base/Footer'
import { Headers } from './base/Headers'
import { About } from './pages/About'
import { Content } from './pages/Content'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { NotFound } from './pages/NotFound'



export const Main = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Headers />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='cont' element={<Content />} />
            <Route path='movies/' element={<Movies />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      <main className='container main'></main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
