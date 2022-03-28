import React from 'react';
import data from './data'
import './App.css'
import Track from './Components/Tracks';
import Wrapper from './Components/Wrapper';

function App() {
  return (
    <div className='wrapper'>
      <Wrapper />
      {data.map((d)=> (
        <Track image={d.album.images[0].url} artist={d.album.artists[0].name} title={d.name} link={d.external_urls.spotify}/>
      ))}
    </div>
  );
}

export default App;
