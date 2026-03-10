import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/images/logo.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faHeart, faBagShopping  } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div>
          <div>
            <input type="search" placeholder="Search Product..." />
            <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
          <div>
            <Link to="/login"><span><FontAwesomeIcon icon={faUser} /></span>Login</Link>
            <Link to="/cart"><span><FontAwesomeIcon icon={faHeart} /></span><span>0</span></Link>
            <Link to="/cart"><span><FontAwesomeIcon icon={faBagShopping} /></span><span>0</span></Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header