import imagefa from '../images/facebook.png';
import logo from '../images/logo.png';
import instag from '../images/insta.jpeg';
import googl from '../images/google.png';
import page from '../images/page.png';
import './FormStyles.css';

import React from 'react'

function Login() {
    return ( <
        div >

        <
        form className = "containerlogin login-main"

        method = "POST" >

        <
        div className = "logocontainer" >
        <
        img src = { logo }
        alt = "Logo"
        className = "logo" / >
        <
        /div> <div > <
        input type = "email"
        placeholder = "email"
        name = "email"
        required / >
        <
        input type = "password"
        placeholder = "Password"
        name = "psw"
        required / >

        <
        button type = "submit"
        className = "loginbtn" > Login < /button> <br/ >
        <
        div class = "forgotdiv" >

        <
        span class = "psw" > < a href = "#" > Forgot password ? < /a></span >
        <
        /div> 


        <
        /div> <hr/ >
        <
        h5 > or Sign up with < /h5> <div className = "iconlinks" > <a href = "https/ / instagrame.com " > <
        img src = { instag }
        alt = "insta"
        width = "10%" / >
        <
        /a> <a href = "https/ / facebook.com " > <
        img src = { imagefa }
        alt = "facebook"
        width = "10%" / >
        <
        /a> <a href = "https/ / google.com " > <img src = { googl }
        alt = "google"
        width = "12%" / >
        <
        /a> </div >
        <
        div class = "forgotdiv" >




        <
        span class = "psw" > < /span> </div >

        <
        /form> 

        <
        /div>

    )
}

export default Login;