
import React, {  useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
const Admin = () => {
 let[allProduct,setAllProduct]=useState([])
 console.log(allProduct)
    useEffect(()=>{
        fetch(`http://localhost:5000/allProduct`)
        .then(res=>res.json())
        .then(result=>setAllProduct(result))
    },[])
   let deleteEvent=(id)=>{
     
fetch(`http://localhost:5000/deleteproduct/${id}`,{
  method:"DELETE",


}



)
.then(res=>res.json())
.then(result=>console.log(result))

    }
    return (

        <div>
      
            
        {allProduct.map(product =><Table className="mt-5" striped bordered hover>
            <thead>
    <tr>
    
      <th>Product Name</th>
      <th>Wight</th>
      <th>Price</th>
       <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{product.productName}</td>
      <td>{product.wight}</td>
      <td>{product.price}</td>
       <th><button className="btn btn-danger" onClick={() =>deleteEvent(product._id)}>Delete</button></th>
    </tr>
   
 
  </tbody>
</Table> )
        
        }
  
        </div>
    );

          }
export default Admin;