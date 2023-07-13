import React,{useState} from 'react'

const UseStateArrays = () => {

    const bio=[
        {
            id:0,
            name:"Damodar",
            age:19
        },
        {
            id:1,
            name:"Arafath",
            age:18
        },
        {
            id:2,
            name:"Rajkumar",
            age:20
        },
        
    ];
  const [array,setArray]=useState(bio);
  const clear=()=>{
    setArray([]);
  }
  return (
    <>
         <center>
          {
            array.map((element,index)=>{
            return(
            <h1 key={element.id}>Name : {element.name} and age is {element.age}</h1>
            );
            }
            )
          }
          <button onClick={clear}>clear</button>
          </center>
    </>
  )
}

export default UseStateArrays