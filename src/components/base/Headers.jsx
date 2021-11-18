import React from 'react'

import { Link, Outlet } from 'react-router-dom'
import { Layout } from '../Layout'
import { Main } from '../Main'

export const Headers = () => {
  return (
    <>
      <div>
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
        </nav>
      </div>
      <Outlet />

      
    </>
  )
}
