import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [active, setActive] = useState('home')
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Krete</h1>
      </div>
      <div className="links">
        <ul>
            <li ><a href="">Home</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">About</a></li>
        </ul>
      </div>
      <div className="cart">
      <i class='bx bxs-shopping-bag'></i>
      </div>
    </div>
  )
}

export default Navbar
