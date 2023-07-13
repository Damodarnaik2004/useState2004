import React, {useState} from 'react'

const UseStateObject = () => {

    const[myobject,setMyobject]=useState({
        name:'John',
        age:25,
        city:"New York"
    });

    const change=()=>{
      setMyobject({...myobject,name:"Damodar"});
    }
  return (
    <>

     <center>

        <h1>Name is:{myobject.name} and age is:{myobject.age} and 
        city is:{myobject.city}</h1>
        <button onClick={change}>update</button>
     </center>

    </>
  )
}

export default UseStateObject