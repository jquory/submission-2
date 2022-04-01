import React from 'react';
import data from './data'
import './App.css'
import Track from './Components/Tracks';
import Wrapper from './Components/Wrapper';
import Search from './Components/Search';

function App() {
  const access_token = window.location.hash.substring(1, window.location.hash.length -1).split("&")[0].split("=")[1]
  
  const redirect_uri = 'http://localhost:3000/callback'
  const clientId = '3e998473355d4fb7936636c8bd356fd6'
  const scope = 'playlist-modify-private'
  const url = `http://accounts.spotify.com/authorize?respon_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`

  return (
    
    <div className='wrapper'>
      <Wrapper />
      <Search />
      {data.map((d)=> (
        <Track key={d.id} image={d.album.images[0].url} artist={d.album.artists[0].name} title={d.name} link={d.external_urls.spotify}/>
      ))}

      
    </div>
  );
}

export default App;
