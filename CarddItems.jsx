import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Apple } from "@mui/icons-material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faCircle } from '@fortawesome/free-solid-svg-icons';



  

export default function CarddItems(props) {
  return (
    <>
      <div className='cards__item'>
        <div>

          <img
            src={props.src} 
            alt='' 
            className='cards-item-img' 
                
          />

      <div className='cards-infor'>
        <div>
        <span className='company'>
        <p className='com'>Company</p>
        <span className='container-apple'>
        <Apple  style={{ fontSize: 13 }} className='apple'/>
          <p><b>Apple</b></p>
        </span>                    
        </span>
          <span className='order'>
            <p className='order-num'>Order Number</p>
            <p className='order-number'><b>1266201</b> </p> 
        </span>
        <span className='product'>
          <p className='prod'>Product</p>
          <p className='mac'> <b>Mac Book Air</b></p> 
        </span>
        <span className='vat'>
          <p className='vate'>Vat(20%)</p>
          <p><b>$100.00</b> </p> 
        </span>
        </div>
        <span className='icon-circle'>
          <FontAwesomeIcon icon={faCircle} className="icon" />
          <span className='font-icon'>
          <p className='pino'>---------------------------------------------</p>
          <FontAwesomeIcon icon={faCircle} className="fac" />
          </span>
        </span>
          <div className='pay'>
          <p>You have to pay </p>
          
        <span className='usd'>
          <p className='money'><b className='five'>549</b>.99 USD</p>
          <FontAwesomeIcon icon={faFileInvoiceDollar} className="invoice"/>
        </span>
        </div>
          </div>
          </div>
      </div>
    </>
  )
}
