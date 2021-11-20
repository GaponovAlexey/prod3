import React from 'react'
import { Routes, Route } from 'react-router'
import { Footer } from './base/Footer'
import { Headers } from './base/Headers'
import { About } from './pages/About'
import { Content } from './pages/Content'
import { CreatePage } from './pages/CreatePage'
import { EditPosts } from './pages/EditPosts'
import { Home } from './pages/Home'
import { Movies } from './pages/Movies'
import { MoviPage } from './pages/MoviPage'
import { NotFound } from './pages/NotFound'

export const Main = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Headers />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='count' element={<Content />} />
            <Route path='movies/' element={<Movies />} />
            <Route path='movies/:id' element={<MoviPage />} />
            <Route path='movies/:id/edit' element={<EditPosts />} />
            <Route path='movies/create' element={<CreatePage />} />
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
