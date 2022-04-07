import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

const CreatePlaylist = ({ selected }) => {

  const [playlist, setPlaylist] = useState({
    name : '',
    desc : ''
  })
  const [error, setError] = useState(false)
  const [playlistData, setPlaylistData] = useState([])
  const [playlistId, setPlaylistId] = useState('')

  const accessToken = useSelector((state) => state.token.token)

  const getPlaylist = () => {
    axios.get(`https://api.spotify.com/v1/me/playlists`, {
      headers : {
        Authorization : `Bearer ${accessToken}`
      }
    }).then((res) => {
      setPlaylistData(res.data.items)
    }).catch((error) => console.log(error))
  }

  const addSong = () => {
    let allSong = ''
    selected.forEach((d) => {
      allSong += d + ','
    })
    axios.post(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?access_token=${accessToken}&uris=${allSong}`).catch((error) => console.log(error))
  }

  const postSong = () => {
    axios.post('https://api.spotify.com/v1/users/	31f2pmcxaksb35iqcjhay5hddnvi/playlists', {
      name : playlist.namePlaylist,
      description : playlist.descriptionPlaylist,
      public : false,
    },
    {
      headers : {
        Authorization : `Bearer ${accessToken}`
      }
    }).then((res) => {
      console.log(res.data.id)
      setPlaylistId(res.data.id)
    }).catch((error) => console.log(error))
  }

  const btnSubmit = (e) => {
    e.preventDefault()

    const errors = {...playlist}

    if(errors.namePlaylist.length <= 10) {
      setError({
        ...errors,
        namePlaylist: 'Minimum 10 character',
      })
    }else {
      setError({
        ...errors,
        namePlaylist: '',
      })
    }
    postSong()
    setPlaylist({
      namePlaylist: '',
      descriptionPlaylist: '',
    })
  }
  const btnChange = (e) => {
    const { name, value } = e.target
    setPlaylist({
      ...playlist,
      [name] : value,
    })
    const errors = { ...playlist }
    if(errors.namePlaylist.length <= 10) {
      setError({
        ...errors,
        namePlaylist: 'Minimum 10 character',
      })
    }else {
      setError({
        ...errors,
        namePlaylist: ''
      })
    }
  }


  return (
    <div>
      <button onClick={addSong}>Add to Playlist</button>
      <button onClick={getPlaylist}>Playlist</button>
      {playlistData.map((d, index) => (
        <div key={index}>
          <h6>{d.name}</h6>
          <p>{d.description}</p>
          <p>{d.tracks.total}</p>
          <button onClick={addSong}>Add Song</button>

        </div>
      ))}

      <h1>Create Playlist</h1>
      <form onSubmit={btnSubmit}>
        <label>Name</label>
        <input type="text" required value={playlist.namePlaylist} name='NamePlaylist' placeholder='Playlist Name'onChange={btnChange} />
        {error.namePlaylist && (
          <p>{error.namePlaylist}</p>
        )}
        <label>Description</label>
        <input type="text" required value={playlist.descriptionPlaylist} name='descriptionPlaylist' placeholder='Description'onChange={btnChange} />
        <button type='submit' > Submit</button>
      </form>
    </div>
  )
}

export default CreatePlaylist