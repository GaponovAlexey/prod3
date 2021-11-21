import React from 'react'

import { Link, Outlet } from 'react-router-dom'

export const Headers = () => {
  return (
    <>
      <nav>
        <div className='nav-wrapper cyan lighten-3 '>
          <Link to='/' className='brand-logo'>
            Categoty
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
