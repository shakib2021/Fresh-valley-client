import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Products from '../Products/Products';
import {Container, Table} from 'react-bootstrap';
import './CheckOut.css'
import { userContext } from '../../App';
const CheckOut = () => {

  let {checkout_id}=useParams();

  let [save,setSave]=useState({
  isSave:false
})

document.title="CheckOut"
//   .....................................

let  handleSave=()=>{
    let copySave={...save,isSave:true}
    setSave(copySave)
}





let [checkOut,setCheckOut]=useState([])
useEffect(()=>{

    fetch(`http://localhost:5000/allProduct`)
    .then(res=>res.json())
    .then(result=>{
   
     setCheckOut(result)
    })
  },[])
  const clickedProduct=checkOut.filter(product=>product._id== checkout_id)
let product=clickedProduct[0]
let {price,productName}=product ||{};

let [loggedInUser,setLoggedInUser]=useContext(userContext);
let email=loggedInUser.email;
let orderData={email,price,productName}

useEffect(()=>{

if(save.isSave==true){
  fetch('http://localhost:5000/saveorder',{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(orderData)
    
    })
}


})



  return (
    <Container className="for">
      <h1 className="mt-5 text-left-align">Checkout</h1>
  <Table className="mt-5  checkouty " striped bordered hover>
  <thead>
    <tr>
     
      <th>Description</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>{productName}</td>
      <td>1</td>
      <td>{price}$</td>
    </tr>
  
  
  </tbody>
</Table>
   { save.isSave ? <button  onClick={handleSave} className="btn btn-info">Ordered Successfully</button>:  <button onClick={handleSave} className="btn btn-outline-info">Save </button>}    
    </Container>
  );
};

export default CheckOut;