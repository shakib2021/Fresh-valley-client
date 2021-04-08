import React, { useEffect, useState } from 'react';
import {Container, Spinner} from 'react-bootstrap';
import Products from '../Products/Products';
import './Home.css'
const Home = () => {
let [products,setProducts]=useState([])



console.log(products)
useEffect(() =>{
   fetch('http://localhost:5000/allProduct')
   .then(res=>res.json())
   .then(result=>setProducts(result))
    
   
}, [])

document.title="Hut-Bazar"

    return (
        <Container className="container">
            {products.length==0 && <Spinner className="prog" animation="border" role="status">
  <span className="sr-only ">Loading...</span>
</Spinner>
            }
               {products.map(Product =><Products Product={Product}  ></Products> )}
        </Container>
    );
};

export default Home;