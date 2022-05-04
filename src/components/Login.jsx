import imagefa from '../assets/images/facebook.png';
import logo from '../assets/images/logo.png';
import instag from '../assets/images/insta.jpeg';
import googl from '../assets/images/google.png';
import page from '../assets/images/page.png';
import './FormStyles.css';

const Login = () => (
    <div>
        <div>
            <img src = { logo } alt = "Logo" className = "logo-main" />

        </div>
        <div className = "frontpage" >
               <img src = { page } alt = "page" className = "frontpageimg" />

                <div >
                    <form className = "containerlogin login-main" >
                    <div className = "logocontainer" >
                           <img src = { logo } alt = "Logo" className = "logo" />
                    </div>
                         <div >
                             <input type = "email" placeholder = "email" name = "email" required />
                             <input type = "password" placeholder = "Password" name = "psw" required />

                        <button type="submit" className="loginbtn" > Login </button>
                        <br />
                        <div class = "forgotdiv" >

                             <span class = "psw" > <a href = "#" > Forgot password ? </a></span>
                        </div> 


    </div>
    <hr/>
    <h5 > or Sign up with </h5> <div className = "iconlinks" >
    <a href = "https//instagrame.com" >
    <img src = { instag } alt = "insta" width = "10%" />
                        </a>
                        <a href="https//facebook.com" >
    <img src = { imagefa } alt = "facebook" width = "10%" />
    </a> <a href = "https//google.com" >
    <img src = { googl } alt = "google" width = "12%" />
    </a> </div>
    <div class = "forgotdiv" >

                        <span class="psw" > <a href="#" > don 't have account?create one </a></span>
                        </div> 
        
                </form>
            </div>
    </div>

    </div>

);
export default Login;