import React from 'react';

const ModalWindow = ({open, hide}) => open ? (

<React.Fragment>

    <div className="modal-window">
            
        <div className="modal-wrapper">

            <button type="button" className="close" onClick={hide}>
                <span>&times;</span>
            </button>

            <h2>Quel expérience recherchez vous ?</h2>

            <div className="choice">

                <div className="dev">

                </div>

                <div className="asso">

                </div>
            </div>
            
        </div>

    </div>

</React.Fragment>

) : null;





       

export default ModalWindow;