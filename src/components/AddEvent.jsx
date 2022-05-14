import logo from './images/logo.png';
import Addperson from './AddPerson';
import Footer from './footer/Footer';

const AddEvent = () => (

        <div>
             <form className = "container-box " >
                      <div className = "logocontainer" >
                          <img src={logo} alt="Logo" className="logo" />
                    </div>
             <p>
               <select name="event" placeholder='select event'>
                   <option value="birthday" > Birthday </option>
                   <option value = "Anniversary" > Anniversary </option>
                   <option value = "customize" > Customize </option>
                </select>
             </p>
                        <p>
                        <input type="date" placeholder="Date of Birth" name="dob"
                                 required />
                        </p>
                        <div className="btn-box">
                            <button type='button' className="loginbtn" > Back </button>
                            <button type='submit' className="loginbtn" > Add Person </button>
                        </div>
         </form>
    </div>

);
export default AddEvent;