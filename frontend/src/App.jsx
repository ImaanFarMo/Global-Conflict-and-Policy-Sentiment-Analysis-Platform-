import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateCountry from './pages/CreateCountry'
import DeleteCountry from './pages/DeleteCountry'
import EditCountry from './pages/EditCountry'
import Home from './pages/Home'
import ShowCountry from './pages/ShowCountry'




const App = () => {
  return (
    <Routes>
      <Route path= '/' element={<Home />} />
      <Route path= '/countries/create' element={<CreateCountry />} />
      <Route path= '/countries/details/:id' element={<ShowCountry />} />
      <Route path= '/countries/edit/:id' element={<EditCountry/>} />
      <Route path= '/countries/delete/:id' element={<DeleteCountry/>} />
    </Routes> 
  );
};

export default App;