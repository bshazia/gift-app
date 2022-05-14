import facebook from '../images/facebook.png';
import logo from '../images/logo.png';
import google from '../images/google.png';
import page from '../images/page.png';
import './FormStyles.css';
import React from 'react'

function Login() {
    return (
       <>
           <div className = "logocontainer" >
               <img src = { logo } alt = "Logo" className = "logo-main" />
               <h4>Start the countdown to your special day</h4>           </div>

           <div class="frontpageimg" >
                  <img src={page} alt='page' className='frontpageimg'/>
            </div>
        <form className = "containerlogin login-main" method = "POST" >


        <div className = "logocontainer" >
                 <img src = { logo } alt = "Logo" className = "logo" />
           </div>
            <div>
                <p>
                    <input type = "email" placeholder = "email" name = "email" required />
                </p>
                <p>
                    <input type="password" placeholder = "Password" name = "psw" required />
                </p>
                      <button type="submit" className="loginbtn" > Login </button>
                <br/>
        <div class = "forgotdiv" >
             <br/>
        <span class = "psw" >
            < a href = "#" > Forgot password ? </a>
        </span>
        </div>

        </div>
            <hr/>
        <h5> or Sign up with </h5>
            <div className = "iconlinks" >

                <a href = "https//facebook.com">
                    <img src = {facebook} alt = "facebook" width = "16%%" />

                           </a>
                <a href = "https//google.com" >
                    <img src = {google} alt = "google" width = "22%" />
        </a>
            </div>
        </form>
       </>
    )
}

export default Login;