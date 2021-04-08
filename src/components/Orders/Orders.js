import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import {Container, Table} from 'react-bootstrap';

const Orders = () => {
    document.title="Your  Orders";
    let [loggedInUser,setLoggedInUser]=useContext(userContext);



    let [orders,setOrders]=useState([])

    
    useEffect(()=>{
  fetch("http://localhost:5000/saveorders")
    .then(res=>res.json())
    .then(result=>{
     setOrders(result)
    })

    },[])
    
let saved=orders.filter(order=>order.email==loggedInUser.email)


    return (
        <Container>
            <h1 className="mt-5">Your Total Order:{saved.length}</h1>
{  saved.map(show=> <Table striped bordered hover>
  <thead>
    <tr>
    
      <th>Product Name</th>
      <th>Price</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{show.productName}</td>
      <td>{show.price}</td>
      <td>{show.email}</td>
    </tr>
    
  </tbody>
</Table>
)}

     
        </Container>
    );
 
    }
    export default Orders;

    