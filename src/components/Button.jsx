import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Button({ isLink, className, children, to}) {

  return isLink ? (
      <Link to={to} className={className}>
            {children}
      </Link>
  ) : (
      <button className={`${className}`}>
            {children}
      </button>
  )
}

export default Button