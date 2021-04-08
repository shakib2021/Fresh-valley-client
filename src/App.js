import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';

import { createContext, useState } from 'react';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Header from "./components/Header/Header";
import CheckOut from "./components/CheckOut/CheckOut";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";


export let userContext=createContext()

function App() {
let [loggedInUser,setLoggedInUser]=useState({
  isSignIn:false
})
  return (
        
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}  >



      <Router>
        <Header></Header>
      <Switch>
   
        <Route path='/login'>
       <Login></Login>
        </Route>
        <PrivateRoute path='/admin'>
     <Admin></Admin>
        </PrivateRoute>

        <Route exact path="/" >
          <Home></Home>

        </Route>
        <PrivateRoute path="/addproduct">
        <AddProduct></AddProduct>
        </PrivateRoute>

        <PrivateRoute path="/orders">
        <Orders></Orders>
        </PrivateRoute>

        <PrivateRoute path="/checkout/:checkout_id">
    <CheckOut></CheckOut> 
        </PrivateRoute>
      </Switch>

      </Router>
    </userContext.Provider>
     

  );
}

export default App;
