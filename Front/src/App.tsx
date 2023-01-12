import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GestionVehicule from './pages/GestionVehicule';
import GestionLocation from './pages/GestionLocation';
import LocationVehicule from './pages/LocationVehicule';
import LocatairesPage from './pages/GestionLocataires';
import LocationAssign from './pages/LocationAssign';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/gestvehicule' element={<GestionVehicule/>} />
        <Route path='/gestlocations' element={<GestionLocation/>} />
        <Route path='/locavehicule' element={<LocationVehicule/>} />
        <Route path='/locavehicule2' element={<LocationAssign/>} />
        <Route path='/gestlocataires' element={<LocatairesPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
