import React from 'react'
import { Link } from 'react-router-dom'

const Nabvar = () => {
  return (
    <nav>
        <Link to="/tourapp">Home</Link>
        <Link to="/tourapp/about">About</Link>
        <Link to="/tourapp/product">Product</Link>
        <Link to="/tourapp/chat">Product</Link>
    </nav>
  )
}

export default Nabvar