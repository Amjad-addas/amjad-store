import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Store from './componant/Store/Store'
import Home from './componant/Home/Home'
import About from './componant/About/About'
import Navbar from './componant/Navbar/Navbar';
import CardBar from './componant/CardBar/CardBar';


const App = () => (
  <HashRouter basename='/'>
  <>
  <Navbar/>
  <div className='container'>
  
      <Routes>
      <Route  exact path="/" element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    
  </div>
  <CardBar/>

  </>
  </HashRouter>


);

export default App;

