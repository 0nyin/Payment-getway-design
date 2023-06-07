import React , { useState } from 'react';
import { Close } from '@mui/icons-material';
import "./Topbar.css";

export default function Topbar() {
  const [click , setClick] = useState(false)


  const handleClick = () => setClick (!click)
  const closeMobileMenu = () => setClick(false)
   
  return (
    <div className='topbar-container'>

      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} /> 
                      
      </div>

      <div className='topbar-close' onClick={closeMobileMenu}>
      <Close  className='topbar' />
      </div>
      
    </div>
  )
}
