import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Concept from './pages/Concept';
import Home from './pages/Home';
import {Portraits, Créations} from './pages/Portfolio';

setInterval(callApp, 10000);
async function callApp() {
  console.log('Appel');
  const res = await fetch('https://gminiphotography.herokuapp.com/');
  console.log(res);
}
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/portraits" element={<Portraits/>}/>
        <Route path ="/creations" element={<Créations/>}/>
        <Route path ="/concept" element={<Concept/>}/>
        <Route path ="*" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;