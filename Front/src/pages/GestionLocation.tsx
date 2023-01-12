import React, { useEffect, useState } from 'react'
import { setConstantValue } from 'typescript'
import Navbar from '../component/Navbar'
import { locataireService } from '../services/LocataireService';

function GestionLocation() {

  const [locations, setLocations] = useState <Location[]>();

  useEffect(() => {
    locataireService.findAllLocataires().then((data) => setLocations(data))
  })

  return (
    <>
      <Navbar data={"GESTION LOCATIONS"}/>
      <div>Gestion Locations</div>
    </>
  )
}

export default GestionLocation