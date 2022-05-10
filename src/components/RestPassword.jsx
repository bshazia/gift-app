import logo from './images/logo.png';

const RestPassword = () => ( <
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
    input type = 'password'
    placeholder = "New Password"
    name = "newpassord"
    required / >
    <
    input type = "password"
    placeholder = "Confirm Password"
    name = "ConfirmPassword"
    required / >
    <
    button type = 'submit'
    className = "loginbtn" > Confirm < /button> 





    <
    /div>

    <
    /div> </form > < /div>




);
export default RestPassword;