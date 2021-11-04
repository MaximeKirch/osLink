import React from 'react';
import '../App.css'
import Service from './Services'
import NousDev from './NousDev'
import GithubTrends from './GithubTrends'
import Partners from './Partners';


function Body() {

    return(
        <>
    <div className='bodyContainer'>

            <NousDev />

            <GithubTrends />

            

            

            
                
        
        
        </div>

    
        <Service />

        

        <Partners />

        
    

       
    </>
    );
}


export default Body