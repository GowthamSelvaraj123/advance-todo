import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({path, title}) {
  return (
    <>
        <Link to={path}>{title}</Link>
    </>
  )
}
