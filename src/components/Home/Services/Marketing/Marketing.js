import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Marketing() {
  const location = useLocation()
  const values = Object.values(location)
  console.log(location)
  return (
    <div>
      <h1>Nos services de Marketing {values} </h1>
    </div>
  )
}
