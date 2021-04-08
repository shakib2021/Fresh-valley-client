import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import {Container} from 'react-bootstrap';
import './AddProduct.css'
const AddProduct = () => {
  let [imageURL,setImageURL]=useState(null)

  const { register, handleSubmit,errors } = useForm();
  const onSubmit = data=> {
    const Product={
      productName:data.productName,
      wight:data.wight,
      price:data.price,
      img:imageURL


    };
    fetch('http://localhost:5000/addProduct',{
      method: 'POST',
      headers:{
        "content-type":'application/json',
      },
      body:JSON.stringify(Product)

    })    
    
    console.log(Product)};

     ///////////////////////
let handlePic=(event)=>{
const imageData=new FormData()
imageData.set('key','297c47d38fadb6e7e10ed36519c1a5e3')
imageData.append('image', event.target.files[0])
axios.post('https://api.imgbb.com/1/upload',imageData)
.then(function (response) {
  setImageURL(response.data.data.display_url)
   console.log(response.data.data.display_url)
})
.catch(function (error) {
  console.log(error);
});
}
  
  return (

    <Container className="for">
      <h1 className="mt-5" >Add Product</h1>

    <form className="f" onSubmit={handleSubmit(onSubmit)}>
      <div className="con">

      <input required className="put" type="text"  name="productName" placeholder="Product Name" ref={register} /> <br></br>
     
     <input required className="put" type="text"  name="wight"  placeholder="Product Wight" ref={register} /> <br></br>
 
    
     <input required className="put"  type="number" name="price"  placeholder="Product Price" ref={register} />   <br></br>
    
     <input required className="put" type="file" onChange={handlePic} />   <br></br>
     
     {errors.exampleRequired && <span>This field is required</span>}
     <input className="put" type="submit" />
      </div>
     
   </form>

</Container>


  );
};


export default AddProduct;