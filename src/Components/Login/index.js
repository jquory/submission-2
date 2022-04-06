import React from 'react'

const Login = () => {

  const access_token = window.location.hash.substring(1, window.location.hash.length -1).split("&")[0].split("=")[1]
  
  const redirect_uri = 'https://qorey-spotify.vercel.app/'
  const clientId = '3e998473355d4fb7936636c8bd356fd6'
  const scope = 'playlist-modify-private'
  const url = `http://accounts.spotify.com/authorize?&client_id=${clientId}&scope=${scope}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`

  const handleLogin = () => {
    window.open(`http://accounts.spotify.com/authorize?&client_id=${clientId}&scope=${scope}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`)
  }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login