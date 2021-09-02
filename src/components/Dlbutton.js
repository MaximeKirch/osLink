import React, { useState } from 'react';
import '../App.css';
import './styles/theme.css';
import { Button } from './components/button/button';


function Dlbutton() {

  const [theme, setTheme] = useState('dark');
  const [isActive, setActive] = useState(false);


  const updateTheme =()=>{
    if (theme=='light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  } 

  const toggleClass = () => {
    setActive(!isActive);
  };


  

  return (
    <div className = {"App "+theme+" "+(isActive ? 'active': null)}>
      <Button  />
      <div id="toggle" className = {(isActive ? 'active': null)} onClick={
              () => {
                      toggleClass();
                      updateTheme()
      }
}  label="Click Me">
      <div id="toggle" className = "indicator"></div>
      
    </div>
      </div>
      
  );
}

export default Dlbutton;