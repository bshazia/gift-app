import React from 'react'
import { Calendar } from 'react-calendar'
import DisplayEvents from '../components/displayevents/DisplayEvents';
import SeasonImage from '../components/SeasonImage';
import Footer from '../components/footer/Footer';


function DashboardPage() {
    return (
        
        <div >
            
        
            <div class="d-flex" >
                
        <div class="p-2 flex-fill" >
                 <DisplayEvents />
                </div>

                <div class="p-2 flex-fill" >
                    <Calendar />
                </div>

                <div class="p-2 flex-fill" >
                    <SeasonImage />
                
                    </div>
                    
                    <div className = 'dash-box' >
       
                    </div>
                    <Footer/>
                    </div>
                     </div>
              
    )
}

export default DashboardPage