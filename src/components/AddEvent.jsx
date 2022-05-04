import logo from '../assets/images/logo.png';
import Addperson from './AddPerson';

const AddEvent = () => ( <div>
    <form className = "container-box " >

    <div className = "logocontainer" >
    <img src = { logo } alt = "Logo" className = "logo" />


    <div>

    <select name = "event" placeholder = 'select event' >

                    <option value="birthday" > birthday </option>
                    <option value="Anniversery" > Anniversery </option>
                    <option value = "custemize" > custmize </option>

                </select>
                <input type = "date"placeholder = "Date of Birth"name = "dob" required / >
    <button type = 'submit' className = "loginbtn" > Addperson </button> 

    <button type = 'button'
    className = "loginbtn" > Back </button>  <br/>



    </div>

    </div> </form > </div>




);
export default AddEvent;