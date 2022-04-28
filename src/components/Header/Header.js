import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react'
import { Calendar } from 'react-calendar';
import logo from './logo.png';


function Header() {
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
        a class = "nav-link nav-links"
        href = "#" > Add < /a> < /
        li > <
        li class = "nav-item" >
        <
        a class = "nav-link nav-links"
        href = "#" > Calendar < /a> < /
        li > <
        li class = "nav-item" >
        <
        a class = "nav-link nav-links"
        href = "#" > settings < /a> < /
        li > <
        /ul> < /
        div > <
        div >
        hello, jhon <
        /div> < /
        nav > < /
        div >
    )
}

export default Header;