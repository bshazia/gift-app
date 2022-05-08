import imagefa from '../assets/images/facebook.png';
import logo from '../assets/images/logo.png';
import instag from '../assets/images/insta.jpeg';
import googl from '../assets/images/google.png';
import page from '../assets/images/page.png';
import './FormStyles.css';


import { Link } from 'react-router-dom';

const Form = () => (
    // eslint-disable-next-line no-undef
    // state = {
    //     fullName: '',
    //     email: '',
    //     password: ''

    // }
    // eslint-disable-next-line no-undef
    // handleInput = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }
    // eslint-disable-next-line no-undef
    // signIn = (e) => {
    //     e.preventDefault();

    //     // eslint-disable-next-line no-undef
    //     const res = axios.post('./db/sign_in.php',this.state)
    // }
   
    <div>
        
        <form className="containerform login-main" action="../db/log_in.php" method="POST" >
            
    
            <div className="logocontainer" >
    
                <img src={logo} alt="Logo" className="logo" />

            </div>
            <div>
                <input type="text" placeholder="Full Name" nam="fullName" onChange={this.handleInput} value={this.state.fullName} required />
                <br />
                <input type="email" placeholder="email" name="email" onChange={this.handleInput} value={this.state.email} required />
                <input type="password" placeholder="Password" name="password" onChange={this.handleInput} value={this.state.password}
                    required />
                <br />
                <button type="submit" className="loginbtn" > Sign up </button>

                <br />
            </div> <hr />
            <h5 > or Sign up with </h5> <div>
                <a href="https//instagrame.com" >
                    <img src={instag} alt="insta" width="10%" />
                </a> <a href="https//facebook.com" >
                    <img src={imagefa} alt="facebook" width="10%" />
                </a> <a href="https//google.com" >
                    <img src={googl} alt="google" width="12%" />
                </a> </div>  </form> </div>
   

   
);


export default Form;

