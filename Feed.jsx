import React from 'react'
import image from "../../assets/images/loggo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {Edit } from "@mui/icons-material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faBraille, faCircle } from '@fortawesome/free-solid-svg-icons';
import "./Feed.css";


export default function Feed() {
    const [formData , setFormData] = React.useState({
        numbers:"",
        numberIcon:"",
        numberZero:"",
        numberTwo:"",
        password:"",
    });

    
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };


   

  return (
    <>
        <div className='container'>   
            <div className='feed-container'>
                <div className='feed'>
                    <img src={image} className='logo-img' />
                    <div className='Acecoin-container'>
                    <span className='Acecoin'><b>AceCoin</b>Pay</span>
                    </div>
                    <div className='leftbar-numbers'>
                    <span className='zero'>0</span>
                    <span className='one'>1</span>
                    <span className='dot'>:</span>
                    <span className='onne'>1</span>
                    <span className='nine'>9</span>
                    </div>
                    </div>
            
                    
                    <div className='card-section'>
                    <p><b>Card Number</b></p>

                    <span className='digit'>
                        Enter the 16-digit card number on the card
                    <span className='group'>
                    <Edit    style={{ fontSize: 13 }}   className='edit-icon'/>
                    <span className='edit'>Edit</span>
                    </span>
                    </span>

                  
                    
                        
                    <div className='input-container'>
                    
                    <FontAwesomeIcon icon={faCircle} className="iconn" />
                    <FontAwesomeIcon icon={faCircle} className="iicon" />
                    <FontAwesomeIcon icon={faCircleCheck} className="icone" />
                    <input
                        type="text"
                        placeholder="2412 - 7512 - 3412 - 3456"
                        onChange={handleChange}
                        name="numbers"
                        value={formData.numbers}
                        className="input-cont" 
                    />
                    </div>

                    
                <form className='form-container'>
                    
                    <label className='cvv-numbers'>
                    <span className='peo'>
                    <p><b>CVV number</b></p>
                    <p>Enter 3 digit or 4 digit onthe card</p>
                    </span>
                    <div className="input-containss">
                        <FontAwesomeIcon icon={faBraille} className="fab" />
                        <input
                            type="text"
                            placeholder="327"
                            onChange={handleChange}
                            name="numberIcon"
                            value={formData.numberIcon}
                            className="input-fab" 
                        />
                    </div>

                    
                    </label>
                    

                    <label className='cvv-numbers'>
                    <span>
                        <p><b>Expiry Date</b> </p>
                        <p>Enter the expiry date of the card</p>
                    </span>
                    <div className="input-contain">
                    <input
                        type="text"
                        placeholder="09"
                        onChange={handleChange}
                        name="numberIcon"
                        value={formData.numberIcon}
                        className='input-datee'
                    />
                    <span className='ppp'>
                        <p>/</p>
                    </span>
                    
                    <input
                        type="text"
                        placeholder="22"
                        onChange={handleChange}
                        name="numberTwo"
                        value={formData.numberTwo}
                        className='input-date'
                    />
                    </div>
                
                    </label>


                    
                    <label htmlFor="password" className='cvv-numbers'>
                        <span className='grop-span'>
                        <p>
                        <span style={{ fontWeight: 'bold' }}>Password</span>
                        </p>
                        <p>Enter your dynamic password</p>
                        </span>
                        <div className="input-word">
                        <FontAwesomeIcon icon={faBraille} className="icon-password" />
                        <input type="password"
                            placeholder="......."
                            onChange={handleChange}
                            name="password"
                            value={formData.password}
                            className="input-password" 
                        />
                        </div>
                    </label>         

                    </form> 
            
                    <input 
                    type="Submit" 
                    value="Pay Now"   
                    className='submit'
                    
                    />

                
                </div>  
                         
                    
            </div>   

        </div>
    </>
 )
};











            