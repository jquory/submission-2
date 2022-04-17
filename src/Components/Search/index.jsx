import React, { useEffect, useState } from 'react'
import Track from '../Tracks'
import { useSelector, useDispatch } from 'react-redux'
import './index.css'
import CreatePlaylist from '../createPlaylist'
import { removeAccessToken } from '../redux/slice/sliceToken'

const Search = () => {

  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.token.token)
  const [api, setApi] = useState([])
  const [search, setSearch] = useState('')

  const [selected, setSelected] = useState([])

  

  const getSpotify = async() => {
    await fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10&access_token=${accessToken}`).then(res => res.json()).then((data) => {
      setApi(data.tracks.items)
    })
    console.log(api)
  }

  useEffect(() => {
    getSpotify()
  }, [search])
  

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    getSpotify()
  }

  

  return (
    <div className='search'>

      <input type="text" value={search} onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>Search</button>
      <div className="tombol">
        <button onClick={() => dispatch(removeAccessToken())}>Log Out</button>
      </div>
      
      {api.map((d) => (
        <div key={d.id}>
          <Track data={d} selected={selected} setSelected={setSelected}/>
        </div>
      ))}

      <CreatePlaylist accessToken={accessToken} selected={selected}/>

    </div>
  )
}
export default Search