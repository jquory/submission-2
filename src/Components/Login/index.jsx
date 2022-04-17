import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setAccessToken } from '../redux/slice/sliceToken'

const Login = () => {

  const history = useHistory()
  const accessToken = useSelector((state) => state.token.token)
  const dispatch = useDispatch()
  const clientID = '3e998473355d4fb7936636c8bd356fd6'

  useEffect(() => {
    if (accessToken) {
      history.push('/create-playlist')
    }
  },[accessToken, history])
  
  const handleLogin = () => {
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=http://localhost:3000/&scope=user-read-email playlist-modify-private playlist-read-private`)
  }
  const accessTokenUrl = window.location.hash.substring(1, window.location.hash.length -1)
    .split('&')[0]
    .split('=')[1]

  if(accessTokenUrl) {
    dispatch(setAccessToken({ accessToken: accessTokenUrl }))
    history.push({
      pathname: '/create-playlist'
    })
  }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login