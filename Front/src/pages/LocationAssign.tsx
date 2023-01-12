import React, { ChangeEvent, SelectHTMLAttributes, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Location } from '../models/locationModel';
import { locataireService } from '../services/LocataireService';
import Navbar from '../component/Navbar'
import voiture from '../assets/img/BMWSerie1.png'
import '../assets/style/LocationVehiculePage.css'

function LocationAssign() {

  const [clients, setClients] = useState([{"id": 0, "name": "", "firstname": "", "phone": "", "birthDate": "", "email": ""}])

  const [selectedClient, setSelectedClient] = useState({"id": 0, "name": "", "firstname": "", "phone": "", "birthDate": "", "email": ""})

  const [vehicule, setVehicule] = useState({"id": 0, "img": "", "immat": "", "brand": "", "model": "", "state": "", "type": "", "priceDay": 0, "available": true})

  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    setVehicule(state);
    locataireService.findAllLocataires().then((data) => setClients(data));
  }, [])

  const selectChange = (event : ChangeEvent<HTMLSelectElement>) => {
    const id : number = Number(event.target.value);
    const clientSelected = clients.filter((item) => item.id == id);
    setSelectedClient(clientSelected[0]);
  }

  const faireLocation = () => {
    const locAssign : Location = {
      "id": 0,
      "vehicule" : vehicule,
      "locataire" : selectedClient,
    }
    // LocationService.add(locAssign);
  }

  return (
    <>
      <Navbar data={"LOCATION ASSIGNATION"}/>
      <div className='locationPage'>
        <div className='vehiculeBox'>
          <div className='vehiculeTopInfoBox'>
            <h4>{vehicule.immat}</h4>
            <h4>{vehicule.brand}</h4>
            <h4>{vehicule.model}</h4>
            <h4>{vehicule.state}</h4>
          </div>
          <img src={voiture} alt="" className='vehiculeMiddleImgBox'/>
          <div className='vehiculeBotInfoBox'>
            <h2 className='priceDay'>{vehicule.priceDay}€/jour</h2>
          </div>
        </div>
        <h2>{vehicule.id}</h2>
        <select onChange={selectChange} name="bonjour" id="hein">
          {clients.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </select>
        <button onClick={faireLocation}>Assigner</button>
      </div>
    </>
  )
}

export default LocationAssign