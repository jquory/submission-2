import React from 'react';
import data from './data'
import './App.css'
import Track from './Components/Tracks';
import Wrapper from './Components/Wrapper';

function App() {
  const clientId = process.env.CLIENT_ID
  const redirect_uri = 'http://localhost:3000/callback'
  const scope = 'playlist-modify-private'
  const url = `http://accounts.spotify.com/authorize?respon_type=token&client_id=${clientId}&scope=${scope}&redirect_uri=${redirect_uri}`

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
