import React,{useState} from 'react'

const UseState2004 = () => {
    const [myName,setMyName]=useState("Damodar channel")
  const change=()=>{
    if(myName=='Damodar channel'){
    setMyName("Thankyou for subscribing")
    }
    else{
      setMyName("Damodar channel")
    }
  }

  return (
    <div>
     
       <center>
       <h1>{myName}</h1>
       <button  onClick={change}>subscribe</button>
       </center>
    


    </div>
  )
}

export default UseState2004