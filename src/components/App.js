import React, { useState } from 'react'
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

const App = (props) => {
  
  return (
    <div className="app row callout">

      <h2 className="title">React Music Player</h2>
      <div className="columns small-6 playlists">
        <PlaylistCollection
          playlists={props.data.playlists}
        />

      </div>
      <div className="columns small-6 songs">
        <SongCollection
          songs={props.data.songs}
        />
      </div>
    </div>

  );
}

export default App
