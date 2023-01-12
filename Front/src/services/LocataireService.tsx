import React from 'react'
import { Locataire } from '../models/locataireModel'

const URL : string = "http://localhost:3000/locataires"

class LocataireService  {

  /**
   * Permet de récuperer tous les locataires en DB
   * @returns liste de locataires
   */
  findAllLocataires = () => {
    return fetch(URL)
    .then(res => res.json())
  }

  /**
   * Permet de créer un locataire
   * @param locataire les information du locataire à créer
   * @returns un nouveau locataire
   */
  createLocataire = (locataire : Locataire) => {
    return fetch(URL, {
      method: "POST",
      body: JSON.stringify(locataire),
      headers: {"content-type": "application/json"}
    }).then((res) => res.json())
  }

  /**
    * Permet de supprimer un locataire par son id
    * @param id l'id du locataire a supprimer
    * @returns ok si le locataire a été supprimé
    */
  deleteLocataire = (id : number) => {
    return fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
  }

  /**
   * Permet de mettre à jour les informations d'un locataire
   * @param id l'id du locataire à mettre à jour
   * @param locataire les informations du locataire à modifier
   * @returns le locataire avec ses informations mises à jour
   */
  updateFullLocataire = (id : number, locataire : Locataire) => {
    return fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(locataire),
      headers: {"content-type": "application/json"}
    }).then(res => res.json())
  }

}

export const locataireService = Object.freeze(new LocataireService())

