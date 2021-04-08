import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
firebase.initializeApp(firebaseConfig)


const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
   let [loggedInUser,setLoggedInUser]=useContext(userContext)
    
  let handleGoogle=()=>{

    let provider = new firebase.auth.GoogleAuthProvider();

firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
  let user= result.user;
  let copyUser={...user,isSignIn:true}
  setLoggedInUser(copyUser)
  history.replace(from)

  console.log(user)
  }).catch((error) => {
   let errorCode = error.code;
    let errorMessage = error.message;
   let email = error.email;
   let credential = error.credential;
   console.log(errorCode,errorMessage,email,credential)
 
  });

   }





 document.title="Hut Bazar-Login";
   
    return (
        <div className="container lo">
            <div className="welcome">
               <h1 style={{marginTop:"10%"}} >Welcome To Hut- <span style={{color:"tomato"}}> Bazar</span> </h1>


            </div>
            <div className="login">
                  <form >
                 <div className="form">
                   <div> <input className="inp1" placeholder="User Name" type="text" name="displayName" id=""/></div> <br/>
                  <div> <input className="inp" placeholder="Email" type="email" name="email" id=""/></div>  <br/>
                <div><input className="inp" placeholder="Password" type="password" name="password" id=""/></div>   <br/> 
                <div> <input className="inp2" type="submit" name="submit" value="Go !" id=""/>   </div> <br/>
                    <span style={{fontSize:"18px"}}>Try To Sign In</span>
                <hr style={{width:"80%", background:"gray"}}  />
                <div><span style={{fontSize:"21px",fontWeight:"bold"}}>Or Continue With</span>    </div>
               <img onClick={handleGoogle}  className="ico" src="/img/goo.jpg" alt="Sign Up With Google"/>
               <img className="ico" src="/img/fb.png" alt=""/>
               <img  className="ico" src="/img/GitHub-Mark.png" alt=""/>
                      </div>

                  </form>
            </div>

        </div>
    );

 }

 


export default Login;