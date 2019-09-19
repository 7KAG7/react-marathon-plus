import React, { useState } from 'react'
import Song from './Song'

const SongCollection = (props) => {
  const [selectedSong, setSelectedSong] = useState(null)
  const songs = props.songs.map((song) => {

    const handleClick = () => {
      setSelectedSong(song.id)
    }

    let selected
    if (song.id === selectedSong) {
      selected = "selected"
    }

    return(
      <Song
      key={song.id}
      name={song.name}
      artist={song.artist}
      handleClick={handleClick}
      selected={selected}
      />
    )
  })

  return(
    <div>
    <h3>Songs</h3>
    {songs}
    </div>
  )
}

export default SongCollection
