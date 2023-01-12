import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../assets/style/HomePage.css'
import Navbar from '../component/Navbar'
import logoLocataires from '../assets/img/Locataires.png'
import logoVehicules from '../assets/img/Vehicules.png'
import logoLocations from '../assets/img/Locations.png'
import logoGestion from '../assets/img/Gestion.png'

function HomePage() {
  return (
    <>
      <Navbar data={"ACCUEIL"}/>
      <section className='gridBoxHome'>
        <section className='cadreBox'>
          <Link to="/gestvehicule" className='boxLeft'>
            <div className='boxTitle'>
              <h2 className='titles'>Gestion des véhicules</h2>
            </div>
            <div className='boxImg'>
              <img className='Img' src={logoVehicules} alt="" />
            </div>
          </Link>
        </section>
        <section className='cadreBox'>
          <Link to="/gestlocataires" className='boxRight'>
            <div className='boxTitle'>
              <h2 className='titles'>Gestion des locataires</h2>
            </div>
            <div className='boxImg'>
              <img className='Img' src={logoLocataires} alt=""/>
            </div>
          </Link>
        </section>
        <section className='cadreBox'>
          <Link to="/locavehicule" className='boxLeft'>
            <div className='boxTitle'>
              <h2 className='titles'>Location des véhicules</h2>
            </div>
            <div className='boxImg'>
              <img className='Img' src={logoLocations} alt=""/>
            </div>
          </Link>
        </section>
        <section className='cadreBox'>
          <Link to="/gestlocations" className='boxRight'>
            <div className='boxTitle'>
              <h2 className='titles'>Gestion des locations</h2>
            </div>
            <div className='boxImg'>
              <img className='Img' src={logoGestion} alt="" />
            </div>
          </Link>
        </section>
      </section>
    </>
  )
}

export default HomePage