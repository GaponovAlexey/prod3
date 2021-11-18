import React from 'react'

import { Link, Outlet, Routes, Route } from 'react-router-dom'
import { About } from '../pages/About'
import { Content } from '../pages/Content'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

const Layout = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#!' className='brand-logo'>
          Logo
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>Aboutn</Link>
          </li>
          <li>
            <Link to='/count'>Count</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </nav>
  )
}
export const Headers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/count' element={<Content />} />
          <Route path='/*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}
