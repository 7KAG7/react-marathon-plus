import React, { useState } from 'react'
import Playlist from './Playlist'

const PlaylistCollection = (props) => {
  let selectedPlaylistId = props.selectedPlaylistId
  let setSelectedPlaylistId = props.setSelectedPlaylistId

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
