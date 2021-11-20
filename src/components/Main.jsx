import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { Footer } from './base/Footer'
import { Headers } from './base/Headers'
import { RequaireAuth } from './hooks/RequaireAuth'
import { About } from './pages/About'
import { Content } from './pages/Content'
import { CreatePage } from './pages/CreatePage'
import { EditPosts } from './pages/EditPosts'
import { Home } from './pages/Home'
import { LoginPage } from './pages/LoginPage'
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
            <Route path='login' element={<LoginPage />} />
            <Route path='about-us' element={<Navigate to='/abo' replace />} />
            <Route path='count' element={<Content />} />
            <Route path='movies/' element={<Movies />} />
            <Route path='movies/:id' element={<MoviPage />} />
            <Route path='movies/:id/edit' element={<EditPosts />} />
            <Route
              path='movies/create'
              element={
                <RequaireAuth>
                  <CreatePage />
                </RequaireAuth>
              }
            />
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
