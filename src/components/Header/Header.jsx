import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.png';


import { Nav, NavLink, NavMenu } from "./NavbarElements";



function Header() {
    const isLoggedIn = true

    return ( < >
        <
        Nav >
        <
        img src = { Logo }
        alt = "Logo"

        /
        >
        <
        NavMenu >
        <
        NavLink to = "/DashboardPage"
        activeStyle >
        DashboardPage <
        /NavLink> <
        NavLink to = "/AddEvent"
        activeStyle >
        AddEvent <
        /NavLink> <
        NavLink to = "/AddPerson"
        activeStyle >
        Addperson <
        /NavLink> <
        NavLink to = "/Login"
        activeStyle >
        Login <
        /NavLink>  < /
        NavMenu > <
        /Nav> < / >
    )
}

export default Header;