// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Header.css'
import { userContext } from '../../App';


const Header = () => {
  let [loggedInUser,setLoggedInUser]=useContext(userContext)
 let handleLogOut=()=>{
   setLoggedInUser({})
 }
  console.log(loggedInUser)
    return (
        <div >
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Hut-Bazar</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto ">
      <Link className="li" to="/">Home</Link>
      <Link className="li" to="/orders">Orders</Link>
      <Link className="li" to="/admin">Admin</Link>
      <Link className="li" to="/deals">Deals</Link>
      
     
    </Nav>
    <Form inline>
  {loggedInUser.isSignIn ? <button onClick={handleLogOut} class="btn btn-primary log" ><Link className="lik" to="/login">Log Out</Link> </button> :<button class="btn btn-primary log" ><Link className="lik" to="/login">Sign In</Link> </button>  }  
    <button class="btn btn-danger log"> <Link className="lik" to="/addproduct">Add Product</Link> </button>
    <img className="profile" src={loggedInUser.photoURL} alt=""/>

    </Form>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
};

export default Header;