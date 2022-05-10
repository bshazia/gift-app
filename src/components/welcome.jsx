import React from 'react'
import page from '../assets/images/page.png';
import logo from '../assets/images/logo.png';

import './FormStyles.css'

function welcome() {
    return ( <
        div >
        <
        div >
        <
        img src = { logo }
        alt = "Logo"
        className = "logo-main" / >

        <
        /div> <div className="frontpage" > <
        img src = { page }
        alt = "page"
        className = "frontpageimg" / >

        <
        /div> < /
        div >
    )
}

export default welcome;