import React, { useEffect, useState } from 'react'
import Track from '../Tracks'
import './index.css'

const Search = () => {

  

  const accessToken = 'BQCW2JalTZmvUTFXxsXYCC6rRoqelrq9-BxSMTppsiqKlC-z4SVS_ktsFGvyV2Pkv5nCRumrlEBJy14txcLTodJRNtv4ynKyQYOPOwMOpj4JRvxzUulHuLT-UpcVP8t08RkLIWFggW8KKL6bwCOOH0st9cXJvduAB7vlG2nSFVx-D0fqkH7Q-s2gTrRKBvxGpJk'
  const [api, setApi] = useState([])
  const [search, setSearch] = useState('')
  const access_token = window.location.hash.substring(1, window.location.hash.length -1).split("&")[0].split("=")[1]

  const [selected, setSelected] = useState([])

  // const [selected, deselect] = useState('')
  

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
      
      {api.map((d) => (
        <div key={d.id}>
          <Track data={d} selected={selected} setSelected={setSelected}/>
        </div>
      ))}

    </div>
  )
}
export default Search