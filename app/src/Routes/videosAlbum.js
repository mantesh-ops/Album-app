import React from 'react'
import Nav from '../Componants/Nav'
import AlbumContentContainer from '../Componants/AlbumContentContainer'

function videosAlbum() {
    return (
        <>
            <Nav />
            <div className='container'>
                <h1>Videos | Albums</h1>
                <AlbumContentContainer albumType={'Video'} />
            </div>
        </>
    )
}

export default videosAlbum
