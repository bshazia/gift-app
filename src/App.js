import './App.css';
import Login from './components/form/Login';
import Form from './components/form/Form';
import DashboardPage from './pages/DashboardPage'
import Calender from './components/calnder/Calender';
import AddPerson from './components/AddPerson';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import RestPassword from './components/RestPassword';
import AddEvent from './components/AddEvent';
import SeasonImage from './components/SeasonImage';
import DisplayEvents from './components/displayevents/DisplayEvents';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Responsive from './components/banner/Responsive';
import React, { useState } from "react";
import { AppContext } from "./components/lib/contextLib";
function App() {
   
    return (
        <>
  

            <Router>
                
    <Header />
                <Routes>
              <Route exact path='/DashboardPage' exact element={<DashboardPage/>} />        
       
      
        <Route path='/AddEvent' element={<AddEvent/>} />
                    <Route path='/AddPerson' element={<AddPerson />} />
                  
                    <Route path='/Responsive' element={<Responsive/>} />
                      <Route path='/Login' element={<Login/>} />
                </Routes>
               
            </Router>
           
           
        </>

    );
}

export default App;