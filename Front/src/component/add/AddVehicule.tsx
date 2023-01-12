import React, { useState } from 'react'
import '../../assets/style/AddVehicule.css'
import img from '../../assets/img/img.png'

export const AddVehicule = (props : any) => {

  const [vehicule, setVehicule] = useState({id: 0, img:"", immat:"", brand:"", model:"", state: "", type: "", priceDay: "", available: ""})

   /**
  * Permet d'enregistrer les modifications des inputs de création d'un vehicule
  * @param event les modifications des inputs
  */
  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setVehicule((vehicule) => ({...vehicule, [event.target.name]: event.target.value}))
   }

   /**
    * Permet d'envoyer les datas des inputs pour les sauvegarder en BDD
    * @param event les modifications des inputs
    */
   const addNewVehicule = (event : any) => {
     event.preventDefault();
     props.addNewVehicule(vehicule);
     setVehicule({id: 0, img:"", immat:"", brand:"", model:"", state: "", type: "", priceDay: "", available: ""})
   }

  return (
    <>
      <section className='topPage'>
        <form onSubmit={(event) => addNewVehicule(event)} className='formBox'>
          <div className='addBox'>
            <div className='imgInput'>
              <label htmlFor="file" className='labelImg'>
                <img src={img} alt="" className='img'/>
              </label>
              <input id='file' className='inputFile' type="file" name="img" onChange={(event) => handleChange(event)} />
            </div>
            <div className='labelInput'>
              <div className='labelList'>
                <label className='label'>Immat : </label>
                <label className='label'>Marque : </label>
                <label className='label'>Modele : </label>
                <label className='label'>Etat : </label>
                <label className='label'>Type : </label>
              </div>
              <div className='inputList'>
                <input className='input' type="text" name="immat" onChange={(event) => handleChange(event)} />
                <input className='input' type="text" name="brand" onChange={(event) => handleChange(event)} />
                <input className='input' type="text" name="model" onChange={(event) => handleChange(event)} />
                <input className='input' type="text" name="state" onChange={(event) => handleChange(event)} />
                <input className='input' type="text" name="type" onChange={(event) => handleChange(event)} />
              </div>
            </div>
            <div className='rightInBox'>
              <div className='prix'>
                <label>Prix/jour : </label>
                <div>
                  <input className='input2' type="text" name="priceDay" onChange={(event) => handleChange(event)} />
                </div>
              </div>
              <div className='dispo'>
                <label>Dispo : </label>
                <input type="checkbox" name="available" onChange={(event) => handleChange(event)} />
              </div>
              <div className='btnAjout'>
                <button type="submit">Ajouter</button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}