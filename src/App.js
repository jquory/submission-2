import React from 'react';
import data from './data'
import './App.css';


function App() {
  let item = data.artists

  return (
    <div className='App'>
      <img src="https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b" alt="" />
      <h1>Bohemian Rhapsody</h1>
    {item.map((items) =>(
      <h2>{items.name}</h2>
    ))}
    <button>Select</button>

    </div>
  );
}




export default App;
