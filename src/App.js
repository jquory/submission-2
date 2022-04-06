import React from 'react';
import './App.css'
import Search from './Components/Search';
import Login from './Components/Login';

function App() {
  

  return (
    
    <div className='wrapper'>

      <Search />
      {/* {data.map((d)=> (
        <Track key={d.id} image={d.album.images[0].url} artist={d.album.artists[0].name} title={d.name} link={url}/>
      ))} */}

      
    </div>
  );
}

export default App;
