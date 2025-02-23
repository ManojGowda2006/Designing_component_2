// write product card here
// write the component code here
import React from 'react';
import img from "../assets/react.svg"
import Cart from './cart'

function Productcard() {
   const pDetails = {
    pImg : img,
    pName : "React Book",
    price : "$200"
   }
   return (
    <>
      <Cart props={pDetails}/>
    </>
   )
}
export default Productcard

