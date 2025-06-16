import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../auth/AuthProvider'

export default function Header() {
  const { user, logout } = useContext(AuthContext)
  return (
    <header>
      <div className='container mx-auto'/* gbkjabs*/>
        <nav className='space-x-4'>
          <div>
            Header
          </div>
          <NavLink to="/">Home</NavLink>
          {
            !user && (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )
          }
          {
            user && (
              <>
                Welcome, {user.firstName}
                <Link onClick={logout}>Logout</Link>
              </>
            )
          }

        </nav>
      </div>
    </header>
  )
}
