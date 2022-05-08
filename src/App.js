import './App.css';
import Login from './components/Login';
import Form from './components/Form';
import Calender from './components/calnder/Calender';
import Addperson from './components/AddPerson';
import welcom from './components/welcome';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import RestPassword from './components/RestPassword';
import AddEvent from './components/AddEvent';
import SeasonImage from './components/SeasonImage';
import DisplayEvents from './components/displayevents/DisplayEvents';
import { BrowserRouter as Router,  Route, Link } from 'react-router-dom';
function App() {
    return (
       
        <div>
            <Header />
            <Calender/>
            <DisplayEvents />
            <SeasonImage/>
    
        <Footer/>
           
        

        </div>

    );
}

export default App;