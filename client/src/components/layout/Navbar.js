import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/" className="fas fa-code">
          DevConnector
        </Link>
      </h1>
      <ul>
        <Link to="!#" className="fas fa-code">
          Developers
        </Link>
        <Link to="/register" className="fas fa-code">
          Register
        </Link>
        <Link to="/login" className="fas fa-code">
          Login
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
