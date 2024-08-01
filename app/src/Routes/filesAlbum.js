import React from 'react'
import Nav from '../Componants/Nav'
import AlbumContentContainer from '../Componants/AlbumContentContainer'

function filesAlbum() {
    return (
        <>
            <Nav />
            <div className='container'>
                <h1>Files | Albums</h1>
                <AlbumContentContainer albumType={'File'} />
            </div>
        </>
    )
}

export default filesAlbum