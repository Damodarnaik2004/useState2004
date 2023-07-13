import React,{useState} from 'react'

const UseStateBasicToDoList = () => {

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
  const remove=(id)=>{
   const newArray=array.filter((element)=>{
    return element.id!=id;
   });
   setArray(newArray);
  }

  return (
    <>
         <center>
            <h1>Basci to do list</h1>
          {
            
            array.map((element,index)=>{
            return(
            <h1 key={element.id}>Name : {element.name} and age is {element.age}
            <button onClick={()=>remove(element.id)}>remove</button></h1>
            );
            }
            )
          }
          <button onClick={clear}>clear</button>
          </center>
    </>
  )
}

export default UseStateBasicToDoList