import React from 'react';
import { NavLink } from 'react-router-dom';

const ModalWindow = ({open, hide}) => open ? (

<React.Fragment>

    <div className="modal-window">
            
        <div className="modal-wrapper">

            <button type="button" className="close" onClick={hide}>
                <span>&times;</span>
            </button>

            <h2>Quel expérience recherchez vous ?</h2>

            <div className="choice">

                <NavLink exact to = "/dev">

                    Développeurs

                </NavLink>

                <NavLink exact to = "asso">

                    Associations

                </NavLink>
            </div>

        </div>

    </div>

</React.Fragment>

) : null;





       

export default ModalWindow;