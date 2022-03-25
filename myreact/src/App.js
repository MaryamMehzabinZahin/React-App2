import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './User';
function App() {
  const [data,setData]=useState(0);
  function updateData()
  {
    setData(data+1)
  }
  console.warn("_____________");
  return (
    <div className="App">
      <header className="App-header">
       <h1> {data}</h1>
       <button onClick={updateData} > Update</button>
      
      </header>
    </div>
  );
}

export default App;
