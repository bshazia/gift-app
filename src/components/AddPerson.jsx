import logo from './images/logo.png';

const Addperson = () => ( <
    div >
    <
    form className = "container-box " >

    <
    div className = "logocontainer" >
    <
    img src = { logo }
    alt = "Logo"
    className = "logo" / >


    <
    div >
    <
    input type = 'text'
    placeholder = "Full name"
    name = "name"
    required / >
    <
    select name = "Gender" >
    <
    option value = "Male" > Male < /option> <
    option value = "Female" > Female < /option>

    <
    /select> <input type = "date" placeholder = "Date of Birth" name = "dob" required / >
    <
    button type = 'submit'
    className = "loginbtn" > Skip < /button> 

    <
    button type = 'button'
    className = "loginbtn" > Next < /button>  <br / >



    <
    /div>

    <
    /div> </form > < /div>




);
export default Addperson;