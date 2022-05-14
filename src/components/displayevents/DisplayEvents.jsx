import React from 'react';
import './displayevents.css'
import Weather from "./Weather";

function DisplayEvents() {
    return (
        <main>
           <section className='container-events' >
               <div className='weather-box' >
                   <Weather/>
                  </div>
                   <h4>This Week</h4>
                        <div className='box' >
                        </div>
                       <div className='box' >
                       </div>
           </section>
        </main>
    )
}
export default DisplayEvents