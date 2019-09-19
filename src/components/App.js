import React, { useState } from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
  let [selectedPlaylistId, setSelectedPlaylistId] = useState(null)

  const selectedPlaylistSongs = props.data.songs.filter(song => {
    let playlist = props.data.playlists.find(playlist => playlist.id === selectedPlaylistId)
    if (playlist === undefined) {
      return false
    }

    return playlist.songs.includes(song.id)
  })

  return (
    <div className="app row callout">

      <h2 className="title">React Music Player</h2>
      <div className="columns small-6 playlists">
        <PlaylistCollection
          selectedPlaylistId={selectedPlaylistId}
          setSelectedPlaylistId={setSelectedPlaylistId}
          playlists={props.data.playlists}
        />

      </div>
      <div className="columns small-6 songs">
        <SongCollection
          songs={selectedPlaylistSongs}
        />
      </div>
    </div>

  );
}

export default App
