import React from 'react'
import { Routes, Route  } from 'react-router'
import { Footer } from './base/Footer'
import { Headers } from './base/Headers'
import { About } from './pages/About'
import { Category } from './pages/Category'
import { Content } from './pages/Content'
import { Home } from './pages/Home'
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
            <Route path='category/:name' element={<Category />} />
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
