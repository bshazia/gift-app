import React from 'react'
import { Calendar } from 'react-calendar'
import DisplayEvents from '../components/displayevents/DisplayEvents';
import SeasonImage from '../components/SeasonImage';
import Footer from '../components/footer/Footer';

function DashboardPage() {
    return ( <
        div >
        <
        div className = 'dash-box' >
        <
        DisplayEvents / >
        <
        Calendar / >
        <
        SeasonImage / >

        <
        /div>    <
        Footer / >
        <
        /div>
    )
}

export default DashboardPage