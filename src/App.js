import React, { useState, useEffect } from "react";
import './App.css';
import Table from './table';

function App() {
  const [table, setTable] = useState([{id: 1, name:"muthu", age:"33"}]);
  const [name ,setName] = useState("");
  const [age ,setAge] = useState("");

  const removedata =(id)=>{
    const removedData = table.filter(data=>data.id !== id);
    setTable(removedData);
  };

  const addData = ()=>{
    if(name.length <=0 || age.length <=0) return false;
    let data = table;
    const id = Math.floor(Date.now() / 1000).toString();
    let newdata= {id:id, name:name, age, age};
    setTable(prevArray => [...prevArray, newdata]);
    setName("");
    setAge("");
  };

  return (
    <>  
      <div className="App">
        <div className="form">
          <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>  setName(e.target.value)} />
          <input type="number" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} />
          <button onClick={addData}>Add</button>
        </div>

        <Table table={table} removedata={removedata} />
      </div>
    </>
    
  );
}

export default App;
