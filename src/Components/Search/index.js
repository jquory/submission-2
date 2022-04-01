import React, { useEffect, useState } from 'react'
import Track from '../Tracks'
import './index.css'

const Search = () => {

  

  const accessToken = 'BQByJqVcTv0h2aXArxZniucCTBv2p5cnu9K_PpdLjj6ZidumBXTh6rAp2pOBT-TSgMJjp6oyEnXMbd_bF-rS233OG3ocPlfbxRQnhIAh64MSA9dxNhJE9paOcSvBRpbeQVN6TCCAR0eZJ-6PjrKymEfZ2jOouur07o4X8IAxNdFoY-Vci-4apwvg7YMqceaz7pQ'
  const [api, setApi] = useState([])
  const [search, setSearch] = useState('')
  const access_token = window.location.hash.substring(1, window.location.hash.length -1).split("&")[0].split("=")[1]

  const [select, setSelect] = useState('')

  const [selected, deselect] = useState('')
  

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
        <Track key={d.id} image={d.album.images[0].url} artist={d.album.artists[0].name} title={d.name} link={d.external_urls.spotify} login={<button />}/>
      ))}
      {select.includes(api.uri) ? (
        <button onClick={() => setSelect(select.filter((uri) => uri !== api.uri))}>Selected</button>
      ) : (
        <button onClick={() => setSelect([...select, api.uri])} >Select</button>
      )}

    </div>
  )
}

export default Search