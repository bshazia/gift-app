import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.png';


import { Nav, NavLink, NavMenu } from "./NavbarElements";


function Header() {
   

    return (
        <>
        <Nav >
        <img src = { Logo } alt = "Logo"/>
            <NavMenu >
                
                <NavLink to="/DashboardPage" activeStyle >
                    
                    Home
                </NavLink>
                <NavLink to="/AddEvent" activeStyle >
                    AddEvent
                </NavLink>

                <NavLink to="/AddPerson" activeStyle >
                    Addperson
                </NavLink>
                <NavLink to = "/Responsive" activeStyle >
                    Landing page
                </NavLink> 
        
                <NavLink to="/Login" activeStyle >
                    Login
                    </NavLink>
            </NavMenu>
        </Nav>
    </>
    )
}

export default Header;