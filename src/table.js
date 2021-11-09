import React, { useState, useEffect } from "react";


const Table = (props)=> {

  return (
    <>
      <table>
        <thead>
          <tr>
          <td>Name</td>
          <td>Age</td>
          <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {props.table.map((data, key)=>(
            <>
            <tr key={key}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td><button onClick={()=>props.removedata(data.id)}>Delete</button></td>
              </tr>
            </>
          ))}
          
        </tbody>
      </table>
    </>
    
   
  );
}

export default Table;
