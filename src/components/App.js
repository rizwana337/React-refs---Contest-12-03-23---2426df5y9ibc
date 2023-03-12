import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

   const emailRef=useRef();
  const passwordRef=useRef();
  const [formInput,setFormInput]=useState({
    emailMsg:"",
    passwordMMsg:"",
  });
  const handleInputChange=(e)=>{
    e.persist();
    if(e.target.id==="inputEmail"){
      setFormInput((state)=>{
        return{
          ...state,["email"]:e.target.value,
        };
      });
    }else{
      setFormInput((state)=>{
        return{
          ...state,["password"]:e.target.value,
        };
      });
    }
  };
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(formInput.email===""){

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={} ref={} onChange={}/><br/>
      Password
      <input id="inputPassword" type="text" value={} ref={} onChange={}/><br/>
      <button id="submitButton" onClick={}>Submit</button><br/>
      <p id="emailText">Your Email : {}</p>
      <p id ="passwordText">Your Password : {}</p>
      
    </div>
  )
}


export default App;
