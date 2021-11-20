import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export const Headers = () => {
  return (
    <>
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
              <Link to='/cont'>Login</Link>
            </li>
            <li>
              <Link to='/movies'>Movie</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
