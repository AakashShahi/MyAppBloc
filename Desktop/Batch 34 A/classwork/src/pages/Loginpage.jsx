import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm';

export default function Loginpage() {

  let navigate = useNavigate()

  const evenChangePage = (event) => {
    event.preventDefault();
    navigate("/register")
  }

  return (
    <div>
      <div>Loginpage</div>
      <Link to="/register">Link to page</Link>
      <NavLink to="/register">NavLink to page</NavLink>
      <button onClick={evenChangePage}>Event based</button>
      <button onClick={(event) => {
        evenChangePage(event)
      }
      }>
        EVENT BASED with callback
      </button>


      <div>
        <LoginForm />
      </div>
    </div>

  )
}
