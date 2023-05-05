import React from "react"

import { Link, Outlet } from "react-router-dom"

export const Headers = () => {
  return (
    <>
      <div className="container header">
        <div className="header-text">
          <Link to="/" className="brand-logo">
            HOME
          </Link>
          <Link to="/" className="brand-logo">
            ABOUT US
          </Link>
          <Link to="/" className="brand-logo">
            CONTACT US
          </Link>
        </div>
      </div>
      <div className="header-logo"></div>
      <Outlet />
    </>
  )
}
