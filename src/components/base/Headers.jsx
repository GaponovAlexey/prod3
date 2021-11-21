import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export const Headers = () => {
  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            Logo
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/' className='brand-logo right'>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
