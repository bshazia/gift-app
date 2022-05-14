import logo from './images/logo.png';
import Footer from './footer/Footer';
const Addperson = () => (
    <div>
        <form className="container-box ">
               <div className="logocontainer">
                   <img src={logo} alt="Logo" className="logo" />
               </div>
                   <p>
                      <input type='text' placeholder="Full name" name="name" required />
                   </p>
                   <p>
                      <select name="Gender" >
                         <option value="Male" > Male </option>
                         <option value="Female" > Female </option>
                          <option value="other" > Other </option>
                      </select>
                   </p>
                   <p>
                   <input type="date" placeholder="Date of Birth" name="dob" required />
                   </p>
            <div className="btn-box">
                        <button type='submit' className="loginbtn" > Skip </button>
                      <button type='button' className="loginbtn" > Next </button>
            </div>
               </form>
           </div>

);
export default Addperson;