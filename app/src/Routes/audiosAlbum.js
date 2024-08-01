import React from 'react'
import Nav from '../Componants/Nav'
import AlbumContentContainer from '../Componants/AlbumContentContainer'

function audiosAlbum() {
  return (
    <>
      <Nav />
      <div className='container'>
        <h1>Audios | Albums</h1>
        <AlbumContentContainer albumType={'Audio'} />
      </div>
    </>
  )
}

export default audiosAlbum
