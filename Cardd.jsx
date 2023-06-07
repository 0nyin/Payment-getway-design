import React from 'react'
import CarddItems from './CarddItems';
import image from "../../assets/images/capt.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cardd.css"

export default function Cardd() {

  return (
    <>
    
    <div className='card'>
      <div className='card-container'>
        <div className='card-wrapper'>
          <CarddItems
          src={image}
          company="Company"
          icon="IconName"
          fruit="Apple"
          order="Order"
          numbers="1266201"
          pro="product"
          mac="Mac Book"
          vat="Vat(20%)"
          dolla="$100.00"
          label="You have to pay 549.99USD"
          
          />
        </div>
      </div>
    </div>
  
  </>
  )
};



































//   return(
//     <>
//       <div className='card'>
//         <div className='card-containe'>
//         <img src={image} className='logo-img' width="100%" height="100%"/>
//         </div>
      
//       </div>
//     </>
//   )
// }


















