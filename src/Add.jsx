import React, { useState } from "react";
import Disply from "./Disply";

function Add() {


  const [text, setText] = useState({
    name:'',
    email:'',
    address:''

  });
  const [arr, setarr] = useState([]);

  
  function task(e) {
    console.log(e.target.name)
    setText({...text,[e.target.name]:e.target.value});
   
  }
  

  function add() {
  setarr([...arr,text])
  //For emptying the fields
  setText({
    name:'',
    email:'',
    address:''

  })
  }
 
  return (
    <div
      className="container bg-black border border-success"
      style={{
        borderRadius: "10px",
        marginTop: "20px",
        color: "green",
        width: "65%",
      }}
    >
      <div className="text-center" style={{ marginTop: "30px" }}>
        <h1>PERSON INFROMATION</h1>
    
        <label htmlFor="lastn">
          <h4>Name</h4>
        </label>
        <input
          type="text"
          onChange={task}
          value={text.name}
          className="form-control"
          placeholder="Enter your Name "
          name="name"
          style={{ textAlign: "center", color:'green',border:'2px solid green' , backgroundColor:'black'}}
        />
              <label htmlFor="lastn">
          <h4>Email</h4>
        </label>
        <input
          type="text"
          onChange={task}
          value={text.email}
          className="form-control"
          placeholder="Enter your Email "
         name="email"
          style={{ textAlign: "center", color:'green',border:'2px solid green' , backgroundColor:'black'}}
        />
              <label htmlFor="lastn">
          <h4>Address</h4>
        </label>
        <input
          type="text"
          onChange={task}
          className="form-control"
          value={text.address}
          name="address"
          placeholder="Enter your Address "
          style={{ textAlign: "center", color:'green',border:'2px solid green' , backgroundColor:'black'}}
        />
        <button
          onClick={add}
          className=" btn btn-outline-success form-control  py-2 my-3"
        >
          Add Person
        </button>
        
      </div>
      <Disply array={arr} />
    </div>
  );

 
}

export default Add;
