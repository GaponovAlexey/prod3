import React from 'react'

import {  Outlet,  } from 'react-router-dom'
import { CustomLInks } from '../hooks/CustomLInks'

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
              <CustomLInks to='/'>home</CustomLInks>
            </li>
            <li>
              <CustomLInks to='/about'>Aboutn</CustomLInks>
            </li>
            <li>
              <CustomLInks to='/login'>Login</CustomLInks>
            </li>
            <li>
              <CustomLInks to='/movies'>Movie</CustomLInks>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
