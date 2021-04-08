import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    let {productName,wight,price,img,_id} = props.Product;
    console.log(productName,_id)
    return (
        <div className="product">
            <div className="cart">
             <div className="imgPart">
      <img src={img}  alt={productName}  />

             </div>
             <div>
             <h4 className="productName">{productName}</h4>
               
             </div>
             <div className="priceAndBuy">
                  <h3 className="price">{price}$</h3>
                  <Button className="buy" variant="success"> <Link className="lik" to={`/checkout/${_id}`}>Buy Now</Link> </Button>{' '}
            </div>
            </div>
            
        </div>
    );
};

export default Products;