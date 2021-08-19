import React, {useState} from 'react';

const ModalLogic = () => {

    //Ici on paramètre une ouverture par défaut (true) 
    const [open,setOpen] = useState(true);

    //Ici on crée la fonction qui permet de modifier l'état de l'ouverture
    function toggle() {
        setOpen(!open)
    }

    // On retourne open et sa fonction
    return {
        open,
        toggle
    }
};

export default ModalLogic;