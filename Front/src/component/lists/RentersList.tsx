import React from 'react'
import { useEffect, useState } from "react"
import { AddLocataire } from '../add/AddLocataire'
import { Locataire } from '../../models/locataireModel'
import { locataireService } from "../../services/LocataireService"
import LocataireContainer from "../containers/LocataireContainer"
import "../../assets/style/RentersList.css"

function RentersList() {
    const [locataire, setLocataire] = useState<Locataire>({id: 0, name: "", firstname: "", phone: "", birthDate: "", email: ""})

    const [locataires, setLocataires] = useState<Locataire[]>([])
  
    /**
     * Permet de récupèrer la liste de locataires à l'initialisation du component
     */
    useEffect(() => {
      getAllLocataires()
    }, [])
  
    /**
     * Fonction qui permet de récuperer tous les locataires depuis le locataireService
     */
    const getAllLocataires = () => {
      locataireService.findAllLocataires().then(data => setLocataires(data))
    }
  
    /**
     * Fonction qui permet de supprimer un locataire par son id depuis le locataireService
     * @param id l'id du locataire à supprimer
     */
    const deleteLocataire = (id : number) => {
      locataireService.deleteLocataire(id).then(() => getAllLocataires())
    }
  
    /**
     * Fonction qui permet d'ajouter un locataire depuis le locataireService
     * @param user les informations du locataire à créer
     */
    const addNewLocataire = (locataire : Locataire) => {
      locataireService.createLocataire(locataire).then(() => getAllLocataires())
    }
  
    /**
     * Fonction qui permet de mettre à jour un locataire
     * @param id  l'id d locataire
     * @param user les infos du locataire à mettre à jour
     */
    const updateLocataire = (id : number, locataire : Locataire) => {
      locataireService.updateFullLocataire(id, locataire).then(() => getAllLocataires())
    }
  
    return (
      <>
        <section className='locatairePage'>
          <div className='boxAdd'>
            <AddLocataire addNewLocataire={addNewLocataire}/>
          </div>
          <div className='boxList'>
            {(locataires) && locataires.map((locataire : Locataire, index : number) => {
              return <LocataireContainer key={index} locataire={locataire} deleteLocataire={deleteLocataire} updateLocataire={updateLocataire}/>})}
          </div>
        </section>
      </> 
    )
}

export default RentersList