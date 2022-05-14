import autom from './images/Autumn-Leaves-Background-PNG.png';
import spring from './images/Spring-Background-PNG-Image.png'
import winter from './images/Winter-PNG-HD-Photos.png';
import summer from './images/Summer.png'
import React, {useEffect, useState} from "react";
import axios from "axios";
function SeasonImage() {
    const [qoute,setQoute] = useState("");
    const [auther,setAuther] = useState("");

    const qouteAPI = async ()=>{
        let arrayOfQoutes = [];
        try{
            const data = axios.get("https://api.quotable.io/random");
            arrayOfQoutes = (await data).data;
            console.log(arrayOfQoutes);

        }catch(error){
            console.log(error);
        }
        try{
            setQoute(arrayOfQoutes.content)
            setAuther(arrayOfQoutes.author)
        }catch (error){
            console.log(error)
        }
    };
    useEffect(()=>{
        qouteAPI();
    },[])

    return (
        <div className='season-box'>
            <span className='qoute'>{qoute}</span>
        <br/>
            <span className='qoute'>{ auther}</span>
            <br/>
        <img src={summer} className='season-image' />
        </div>
    )
}
export default SeasonImage;