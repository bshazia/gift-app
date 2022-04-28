import logo from '../assets/images/logo.png';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Homebox.css';
import page from '../assets/images/page.png';


function Homebox() {
    const [value, onChange] = useState(new Date());
    return ( < div class = "row" >
        <
        div class = "col-md-4" >

        <
        img src = { page }
        alt = "page"

        className = "frontageimg" /
        >
        <
        /div> <
        div class = "col-md-8" > <
        form className = "container " >

        <
        div className = "logocontainer" >
        <
        img src = { logo }
        alt = "Logo"
        className = "logo" / >


        <
        div >

        <
        select name = "event"
        placeholder = 'select event' >

        <
        option value = "birthday" > birthday < /option> <
        option value = "Anniversery" > Anniversery < /option> <
        option value = "custemize" > custmize < /option>

        <
        /select> <
        input type = "date"
        placeholder = "Date of Birth"
        name = "dob"
        required / >
        <
        button type = 'submit'
        className = "loginbtn" > Addperson < /button> 

        <
        button type = 'button'
        className = "loginbtn" > Back < /button>  <
        br / >



        <
        /
        div >

        <
        /div> < /
        form > < /div > < /
        div >
    )
}

export default Homebox;