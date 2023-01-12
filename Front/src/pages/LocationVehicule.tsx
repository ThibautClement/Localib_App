import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'
import { vehiculeService } from '../services/VehiculesService'
import '../assets/style/LocationVehiculePage.css'
import voiture from '../assets/img/BMWSerie1.png'
import moto from '../assets/img/moto.png'

function LocationVehicule() {

  const [vehicules, setVehicules] = useState([{"id": 0, "img": "", "immat": "", "brand": "", "model": "", "state": "", "type": "", "priceDay": 0, "available": false}])

  useEffect(() => {
    vehiculeService.findAllVehicule().then((data) => setVehicules(data));   
  }, [])

  return (
    <>
      <Navbar data={"LOCATION VEHICULES"}/>
      <div className='locationPage'>
      <h1 className='typeTitle'>VOITURE</h1>
        <section className='typeBox'>
          {vehicules.map((item) => {
            if (item.type === "Voiture") {
              return (
                <div className='vehiculeBox'>
                  <div className='vehiculeTopInfoBox'>
                    <h4>{item.immat}</h4>
                    <h4>{item.brand}</h4>
                    <h4>{item.model}</h4>
                    <h4>{item.state}</h4>
                  </div>
                  <img src={voiture} alt="" className='vehiculeMiddleImgBox'/>
                  <div className='vehiculeBotInfoBox'>
                    <h3 className='priceDay'>{item.priceDay}€/jour</h3>
                    <Link className='btnSelect' to="/locavehicule2" state={item}>Selectionner</Link>
                  </div>
                </div>
              )
            }
          })}
        </section>
        <h1 className='typeTitle'>MOTO</h1>
        <section className='typeBox'>
          {vehicules.map((item) => {
            if (item.type === "Voiture") {
              return (
                <div className='vehiculeBox'>
                  <div className='vehiculeTopInfoBox'>
                    <h4>{item.immat}</h4>
                    <h4>{item.brand}</h4>
                    <h4>{item.model}</h4>
                    <h4>{item.state}</h4>
                  </div>
                  <img src={moto} alt="" className='vehiculeMiddleImgBox'/>
                  <div className='vehiculeBotInfoBox'>
                    <h2 className='priceDay'>{item.priceDay}€/jour</h2>
                    <Link className='btnSelect' to="/locavehicule2" state={item}>Selectionner</Link>
                  </div>
                </div>
              )
            }
          })}
        </section>
      </div>    
    </>
  )
}

export default LocationVehicule