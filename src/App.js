import React, { useState } from 'react'
import Header from './components/Header/Header'
import Album from './components/Album/Album'
import Player from './components/Player/Player'

function App() {
  const[song,setSong]=useState('song1.mp3') //state to track current song
  return (
    <div>
      {/* ----components----- */}
      <Header/>
      <Album setsong={setSong}/>
      <Player song={song}/>

    </div>
  )
}

export default App
