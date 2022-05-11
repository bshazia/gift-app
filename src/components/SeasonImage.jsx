import React from 'react';
import autom from './images/Autumn-Leaves-Background-PNG.png';
import spring from './images/Spring-Background-PNG-Image.png'
import winter from './images/Winter-PNG-HD-Photos.png';
import summer from './images/Summer.png'

function SeasonImage() {



    return (

        <
        div className = 'season-box' >
        <
        h3 className = 'qoute' > start your day with smile < /h3> <
        br / >
        <
        img src = { summer }
        className = 'season-image' /
        >
        <
        /
        div >
    )
}

export default SeasonImage;