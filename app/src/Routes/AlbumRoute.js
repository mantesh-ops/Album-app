import React from 'react'
import './AlbumRoute.css'
import Nav from '../Componants/Nav'
import OpenAlbums from '../Componants/OpenAlbums'

function AlbumRoute() {
  return (
    <>
      <Nav />
      <div className='container'>
        <OpenAlbums />
      </div>
    </>
  )
}

export default AlbumRoute