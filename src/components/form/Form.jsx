import imagefa from '../images/facebook.png';
import logo from '../images/logo.png';
import instag from '../images/insta.jpeg';
import googl from '../images/google.png';
import page from '../images/page.png';
import './FormStyles.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react'

function Form() {

// connect to database code
    const [fullName, setfullName] = useState('')
    const [email, setemail] = useState('')
     const [password ,setpassword] = useState('')

    return (
        <div className="wrapper">
            <div className = "logocontainer" >
                <img src = { logo } alt = "Logo" className = "logo-main" />
                <h4>Start the countdown to your special day</h4>
            </div>

            <div className="frontpageimg">
                <img src={page} alt='page' className='frontpageimg'/>
            </div>

            <form className = "containerform login-main" action = "../db/log_in.php" method = "POST">

                <header className="heder">Create Account</header>
                    <p>
                     <input type = "text" placeholder = "Full Name" name="fullName" onChange={(e) => {
                            setfullName(e.target.value);
                           }} required/>
                            </p>
                        <p>
                           <input type = "email" placeholder = "email" name = "email" onChange={(e) => {
                            setemail(e.target.value);
                                        }}
                                  required/>
                              </p>
                        <p>
                            <input type = "password" placeholder = "Password" name = "password" onChange={(e) => {
                            setpassword(e.target.value);
                                      }} required />
                                   </p>
                              <br/>
                    
                            <button type="submit" className="loginbtn" >
                                Sign up
                            </button>
                    <br/>
                <hr/>
                       <h5> or Sign up with </h5>
                            <a href="https//facebook.com" >
                                <img src = { imagefa } alt = "facebook" width = "10%" />
                            </a>
                            <a href="https/ / google.com " >
                                <img src = { googl } alt = "google" width = "12%" />
                                    </a>
                            </form>
                    </div>
    )
}

export default Form

