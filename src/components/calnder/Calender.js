import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calnder.css';

function Calender() {
    const [value, onChange] = useState(new Date());
    return ( <
        div class = ' calender-box' >
        <
        Calendar onChange = { onChange }
        value = { value }
        /> < /
        div >
    );
}

export default Calender;