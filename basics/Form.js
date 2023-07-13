import React, { useState } from 'react'
import './App.css';
const Form = () => {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allentry,setAllentry]=useState([]);

    const change=(e)=>{
         
        if(email && password){
        e.preventDefault();
        const newArray={id:new Date().getTime().toString(   ),email:email,password:password};
        setAllentry([...allentry,newArray]);
        setEmail("");
        setPassword("");
        }
        else{
            alert("plz fill the data properly");
        }
     
    }
  return (
    <>
      <div className='fu'>
      <form  onSubmit={change}>
        <div>
      <label htmlFor='email'>Email</label><br/>
      <input type="text" name="email" id="email"
            value={email} onChange={(e)=>setEmail(e.target.value)}
      />
      </div>
      <div>
      <label htmlFor="password">Password</label><br/>
      <input type="password" name="password" id="password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      </div>
     <button type='submit'>Login</button>

      </form>
      </div>
      {
        allentry.map((element)=>{
            return(
                <h1 key={element.id}>Email is:{element.email} and Password is:{element.password}</h1>
            )
        })
      }
    </>
  )
}

export default Form
