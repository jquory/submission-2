import React, { useEffect, useState } from 'react'
import Track from '../Tracks'
import './index.css'

const Search = () => {

  useEffect(() => {
    getSpotify()
  }, [])

  const accessToken = 'BQDtFi6OveMbmk71qjrpWOfoevJAhlPJzQS_cvt4m8B3y34-q8G7sM5kzJeCHwt6Wpr37bSd8Gi8FqPhyboiNqpXUzOHdK-_C0W__TL7OXit1SFvouqOlN5sPNXA2CXhB57c3nFOPI58Sa1FJXhnYYFAIs62EP3DzUvVFivO1miaxRnQ2JP_3Mt5NMie2S3EztQ'
  const [api, setApi] = useState([])
  const [search, setSearch] = useState('')
  const access_token = window.location.hash.substring(1, window.location.hash.length -1).split("&")[0].split("=")[1]

  const getSpotify = () => {
    fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10&access_token=${accessToken}`).then(res => res.json()).then((data) => {
      setApi(data.tracks.items)
    })
    console.log(api)
  }

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
        <Track key={d.id} image={d.album.images[0].url} artist={d.album.artists[0].name} title={d.name} link={d.external_urls.spotify}/>
      ))}

    </div>
  )
}

export default Search