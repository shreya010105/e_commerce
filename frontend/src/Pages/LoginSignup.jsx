import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from "react-router-dom";



const LoginSignup = () => {
  const navigate = useNavigate();

  const [state,setState] = useState("Login");
   const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 

  const login = async() => {
    console.log("login ",{name,email,password});
    let response;
    await fetch('http://localhost:4000/login',
      {
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name,email,password}),
        })
        .then((resp)=>resp.json())
        .then((data)=>response=data)

        if(response.success){
          localStorage.setItem('auth-token', response.token)
           navigate("/");
        }
        else{
          alert(response.errors)
        } 
  }

  const SignUp = async () => {
  console.log("signup", { name, email, password });

  try {
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Correct header
        Accept: "application/json",         // Expect JSON back
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log("Signup response:", data);

    if (data.success) {
      localStorage.setItem("auth-token", data.token);
      navigate("/login");
    } else {
      alert(data.message || "Signup failed");
    }
  } catch (error) {
    console.error("Signup error:", error);
    alert("An error occurred during signup.");
  }
};

  return (
    <div className='LoginSignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder='UserName' s
          /> : <></>}
          <input type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder='abc@gmail.com' 
          />
          <input type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='Password' 
          />
        </div>
        <button onClick={()=>{state==="Login"?login():SignUp()}}>Continue</button>
        {
        state==="Sign Up" 
        ? <p className="loginsignup-login">Already have an account? <span onClick={()=>setState("Login")}>Login</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>setState("Sign Up")}>Click Here</span></p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup