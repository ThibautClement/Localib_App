import React, { useState } from 'react'
import { Locataire } from '../../models/locataireModel';
import '../../assets/style/AddLocataires.css'

export const AddLocataire = (props : any) => {

  const [locataire, setLocataire] = useState<Locataire>({id: 0, name: "", firstname: "", phone: "", birthDate: "", email: ""});

  /**
   * Permet d'enregistrer les modifications des inputs de création d'un locataire
   * @param event les modifications des inputs
   */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setLocataire((locataire) => ({...locataire, [event.target.name]: event.target.value}))
  }

  /**
   * Permet d'envoyer les datas des inputs pour les sauvegarder en BDD
   * @param event les modifications des inputs
   */
  const addNewLocataire = (event : any) => {
    event.preventDefault();
    props.addNewLocataire(locataire);
    setLocataire({id: 0, name: "", firstname: "", phone: "", birthDate: "", email: ""})
  }

  return (
    <>
      <section className="boxForm">
        <div className='boxGLtitle'>
          <h3 className='GLtitle'>Ajouter un locataire</h3>
        </div>
        <form className="form" onSubmit={(event) => addNewLocataire(event)}>
          <div className='form-centerblock'>
            <div className="form-body">
              <div className="form_block">
                <input className="form__input" value={locataire.name} type="text" name="name" placeholder="Entrer un nom" onChange={(event) => handleChange(event)}/>
              </div>
              <div className="form_block">
                <input className="form__input" value={locataire.firstname} type="text" name="firstname" placeholder="Entrer un Prenom" onChange={(event) => handleChange(event)}/>
              </div>
              <div className="form_block">
                <input className="form__input" value={locataire.phone} type="text" name="phone" placeholder="Entrer un n° de telephone" onChange={(event) => handleChange(event)}/>
              </div>
              <div className="form_block">
                <input className="form__input" value={locataire.birthDate} type="text" name="birthDate" placeholder="Entrer une date" onChange={(event) => handleChange(event)}/>
              </div>
              <div className="form_block">
                <input className="form__input" value={locataire.email} type="text" name="email" placeholder="Entrer un email" onChange={(event) => handleChange(event)}/>
              </div>
            </div>
            <button className='btn' type="submit">Ajouter</button>
          </div>
        </form>
      </section>
    </>
  )
}