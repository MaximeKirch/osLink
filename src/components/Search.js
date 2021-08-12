import React from 'react';

const Search = () => {
    
    
    return (

        <div>

            <h2>Développeur, trouve ton projet !</h2> 
           
            <input type="text" 
            id="search" 
            placeholder="Tapez un mot-clef" 
            autocomplete="off"/>

           <ul id="results">
               top
           </ul>

            <script src="./SaearchModule.js" type="text/javascript"></script>
            
        </div>

    );
}

export default Search;