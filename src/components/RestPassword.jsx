import logo from './images/logo.png';

const RestPassword = () => (
    <div>
    <form className="container-box " >
            <div className="logocontainer" >
               <img src={logo} alt="Logo" className="logo" />
             </div>
        <p>
          <input type='password' placeholder="New Password" name="newpassord" required />
        </p>
        <p>
           <input type="password" placeholder="Confirm Password" name="ConfirmPassword" required />
        </p>
           <button type='submit' className="loginbtn" > Confirm </button>
         </form>
    </div>

);
export default RestPassword;