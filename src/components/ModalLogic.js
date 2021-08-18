import React, {useState} from 'react';

const ModalLogic = () => {
    const [open,setOpen] = useState(true);

    function toggle() {
        setOpen(!open)
    }
    return {
        open,
        toggle
    }
};

export default ModalLogic;