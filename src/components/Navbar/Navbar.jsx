import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [ menu,setMenu ] = useState('home')
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>Krete</h1>
      </div>
      <div className="links">
        <ul>
            <li className={menu==='home'?'active':''} onClick={()=>{setMenu('home')}}>Home</li>
            <li className={menu==='products'?'active':''} onClick={()=>{setMenu('products')}}>Products</li>
            <li className={menu==='about'?'active':''} onClick={()=>{setMenu('about')}}>About</li>
        </ul>
      </div>
      <div className="cart">
      <i className='bx bxs-shopping-bag'></i>
      <div className="dot"></div>
      </div>
    </div>
  )
}

export default Navbar
