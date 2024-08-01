import React from 'react'
import './photosAlbum.css'
import Nav from '../Componants/Nav'
import AlbumContentContainer from '../Componants/AlbumContentContainer'

function photosAlbum() {
    return (
        <>
            <Nav />
            <div className='p-container'>
                <h1>Photos | Albums</h1>
                <AlbumContentContainer albumType={'Photo'} />
            </div>
        </>
    )
}

export default photosAlbum
