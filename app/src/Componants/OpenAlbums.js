import React from 'react'
import './OpenAlbums.css'
import { Link } from 'react-router-dom'

function OpenAlbums() {
    return (
        <main>
            <div className='container'>
                <h1 style={{ fontSize: '2.5rem' }}>Open Created | Albums</h1>
                <h3>Such as | Photos, videos, Audios ect.</h3>
                <div className='categery'>
                    <button><Link to={'/album/photos'}>Photos</Link></button>
                    <button><Link to={'/album/videos'}>Videos</Link></button>
                    <button><Link to={'/album/files'}>Files</Link></button>
                    <button><Link to={'/album/audios'}>Audios</Link></button>
                </div>
            </div>
        </main>
    )
}

export default OpenAlbums
