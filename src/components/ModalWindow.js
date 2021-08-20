import React from 'react';
import { NavLink } from 'react-router-dom';

//Ici via une condition ternaire on affiche la modale si open est true sinon non

const ModalWindow = ({open, hide}) => open ? (

<React.Fragment>

    <div className="modal-window">
            
        <div className="modal-wrapper">

            <button type="button" className="close" onClick={hide}>
                <span>&times;</span>
            </button>

            <h2>Quel expérience recherchez-vous ?</h2>

            <div className="choice">

                <NavLink className="choice-link" id="devChoice" exact to = "/dev">

                    Développeurs

                </NavLink>

                <NavLink className="choice-link" id="assoChoice"exact to = "asso">

                    Associations

                </NavLink>
            </div>

        </div>

    </div>

</React.Fragment>

) : null;





       

export default ModalWindow;