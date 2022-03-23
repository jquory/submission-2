import React from 'react';
import './App.css';
import data from './data'
import Track from './Components/Tracks';




function App() {
  const {album :{artists : [item1]}} = data
  const {album :{images : [item]}} = data
  return (
    <div className='App'>
      <Track image={item.url} title={data.name} artist={item1.name}/>
    </div>
  );
}




export default App;
