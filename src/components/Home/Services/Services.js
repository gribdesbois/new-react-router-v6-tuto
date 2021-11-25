import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <h1>Nos services</h1>
      <nav>
        <Link to="/services/developpement">Services de developpement</Link>
        <Link to="/services/marketing">Services de marketing</Link>
      </nav>
    </div>
  )
}
