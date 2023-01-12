import React from 'react'
import { useEffect, useState } from "react"
import VehiculeList from '../component/lists/VehiculeList'
import Navbar from '../component/Navbar'
import { Vehicule } from '../models/vehiculeModel'
import { vehiculeService } from '../services/VehiculesService'

function GestionVehicule() {

  return (
    <>
      <Navbar data={"GESTION VEHICULES"}/>
      <VehiculeList/>
    </> 
  )

}

export default GestionVehicule