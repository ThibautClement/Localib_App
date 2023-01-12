import React, { useState } from 'react'
import '../assets/style/Navbar.css'
import logo from '../assets/img/localib.png'
import { Link } from 'react-router-dom'
import retour from '../assets/img/fleche-gauche.png'

function Navbar(props : any) {


  return (
    <section>
        <div className='navbar'>
          <img src={logo} className='logo' alt="logo" />
          <div className='titleBox'>
            <div className='title'>{props.data}</div>
          </div>
          <Link to="/" className='fleche'>
            <img src={retour} alt="" />
          </Link>
        </div>
    </section>
  )
}

export default Navbar