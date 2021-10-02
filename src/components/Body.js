import React from 'react';
import '../App.css'
import Service from './Services'
import NousDev from './NousDev'
import Testimonials from './Testimonials'
import GithubTrends from './GithubTrends'


function Body() {

    return(
        <>
    <div className='bodyContainer'>

            <NousDev />

            <GithubTrends />

            

            

            
                
        
        
        </div>

    
        <Service />

        <Testimonials />

        
    

       
    </>
    );
}


export default Body