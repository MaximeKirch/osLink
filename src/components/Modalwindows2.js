import React from 'react';
import { NavLink } from 'react-router-dom';

//Ici via une condition ternaire on affiche la modale si open est true sinon non

const ModalWindow2 = ({open, hide}) => open ? (

<React.Fragment>

    <div className="modal-window">
            
        <div className="modal-wrapper">

            <button type="button" className="close2" onClick={hide}>
                <span>&times;</span>
            </button>

            <h2 className="h2Modal-wrapper">Quel expérience recherchez-vous ?</h2>

                <div className="modalContainer">
                    
                        <NavLink /* className="choice-link" id="devChoice" */ exact to = "/dev">

                        <a id="aModal" href="#" class="btnModal">Développeurs</a>

                        </NavLink>
                 </div>
                 <div>           
                    
                        <NavLink className="choice-link" id="assoChoice"exact to = "asso">

                        <a id="aModal" href="#" class="btnModal">Association</a>

                        </NavLink>
                   
                </div>
        </div>
        

    </div>

</React.Fragment>

) : null;





       

export default ModalWindow2;
