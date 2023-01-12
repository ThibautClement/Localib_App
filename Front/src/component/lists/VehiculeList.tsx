import React, { useEffect, useState } from 'react'
import { Vehicule } from '../../models/vehiculeModel'
import { vehiculeService } from '../../services/VehiculesService'
import { AddVehicule } from '../add/AddVehicule'
import CarsContainer from '../containers/CarsContainer'
import '../../assets/style/VehiculeList.css'

const VehiculeList = () => {

  const [vehicule, setVehicule] = useState<Vehicule>({id: 0, img:"", immat:"", brand:"", model:"", state: "", type: "", priceDay: 0, available: true})

  const [vehicules, setVehicules] = useState<Vehicule[]>([])

  /**
   * Permet de récupèrer la liste des vehicules à l'initialisation du component
   */
  useEffect(() => {
    getAllVehicules()
  }, [])
  
  /**
   * Fonction qui permet de récuperer tous les vehicules depuis le vehiculeervice
   */
  const getAllVehicules = () => {
    vehiculeService.findAllVehicule().then(data => setVehicules(data))
  }

  /**
   * Fonction qui permet de supprimer un vehicule par son id depuis le vehiculeService
   * @param id l'id du vehicule à supprimer
   */
  const deleteVehicule = (id: number) => {
    vehiculeService.deleteVehicule(id).then(() => getAllVehicules())
  }

  /**
   * Fonction qui permet d'ajouter un vehicule depuis le vehiculeService
   * @param user les informations du vehicule à créer
   */
  const addNewVehicule = (vehicule : Vehicule) => {
    vehiculeService.createVehicule(vehicule).then(() => getAllVehicules())
  }

  /**
   * Fonction qui permet de mettre à jour un vehicule
   * @param id  l'id d vehicule
   * @param user les infos du vehicule à mettre à jour
   */
  const updateVehicule = (id: number, vehicule : Vehicule) => {
    vehiculeService.updateFullVehicule(id, vehicule).then(() => getAllVehicules())
  }

  return (
    <>
      <AddVehicule addNewVehicule={addNewVehicule}/>
      <div className='gridContainer'>
        {(vehicules) && vehicules.map((vehicule : Vehicule, index : number) => {
          return (
            <CarsContainer key={index} vehicule={vehicule} deleteVehicule={deleteVehicule} updateVehicule={updateVehicule}/>
        )})}
      </div>
    </>
  )
}

export default VehiculeList