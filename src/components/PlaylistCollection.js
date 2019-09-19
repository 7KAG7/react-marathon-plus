import React, { useState } from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null)

  const playlists = props.playlists.map((playlist) => {

    const handleClick = () => {
      setSelectedPlaylistId(playlist.id)
    }

    let selected
    if (playlist.id === selectedPlaylistId) {
      selected = "selected"
    }

    return (
      <Playlist
        key={playlist.id}
        name={playlist.name}
        handleClick={handleClick}
        selected={selected}
      />
    )
  })

  return(
    <div>
      <h3>Playlists</h3>
      {playlists}
    </div>
  )
}




export default PlaylistCollection
