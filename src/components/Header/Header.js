import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react'
import { Calendar } from 'react-calendar';
import logo from './logo.png';


function Header() {
    const isLoggedIn = false
    return ( <
        div >



        <
        nav class = "navbar navbar-expand-sm color-nav" >
        <
        div >
        <
        ul class = "navbar-nav" >
        <
        li class = "nav-item " >
        <
        a class = " nav-links"
        href = "#" > Add < /a> < /
        li > <
        li class = "nav-item" >
        <
        a class = "nav-links"
        href = "#" > Calendar < /a> < /
        li > <
        li class = "nav-item" >
        <
        a class = " nav-links"
        href = "#" > settings < /a> < /
        li > <
        /ul> < /
        div > <
        div class = ' user-name' >
        // Hello  isLoggedIn && 'jhon'  is same 
        Hello { isLoggedIn ? 'jhon' : 'Guest' } <
        /div> < /
        nav > < /
        div >
    )
}

export default Header;