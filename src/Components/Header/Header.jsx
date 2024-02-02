import React from 'react'
import logo from "../../pngwing.com.png"
import {Link} from "react-router-dom"
import { CgProfile} from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";
import { IoReorderThreeOutline } from "react-icons/io5";

function Header() {
  return (
    <nav className='header'>
      <img src={logo} alt='logo' />

      <div className='airbnb-your-home'>
        <Link to="/" >Airbnb your home</Link>
        <Link to="./"> {<GrLanguage />} </Link>
        <button> {<IoReorderThreeOutline />} {<CgProfile />} </button> 
      </div>

    </nav>
  )
}

export default Header
