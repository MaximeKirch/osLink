import React from 'react';
import { NavLink } from 'react-router-dom';

//Ici via une condition ternaire on affiche la modale si open est true sinon non

const ModalWindow = ({open, hide}) => open ? (

<React.Fragment>

    <div className="modal-window">
            
        <div className="modal-wrapper">

            <button type="button" className="close2" onClick={hide}>
                <span>&times;</span>
            </button>

            <h2 className="h2Modal-wrapper">Quel expérience recherchez-vous ?</h2>

                <div className="modalContainer">
                    <div className="choice" id="devChoiceA">
                        <ul className="ulChoice">
                            <li className="liChoice" id="liChoice1">
                        <NavLink className="choice-link" id="devChoice" exact to = "/dev">

                            Développeurs

                        </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="choice">
                    <ul className="ulChoice">
                            <li className="liChoice" id="liChoice2">
                        <NavLink className="choice-link" id="assoChoice"exact to = "asso">

                            Associations

                        </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
        </div>

    </div>

</React.Fragment>

) : null;





       

export default ModalWindow;