import React, { useState } from 'react'
import './createRoute.css'
import Nav from '../Componants/Nav'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios'

function CreateRoute() {

    const [modal, setmodal] = useState('none')
    const [albumType, setalbumType] = useState('')

    function openModal() {
        setmodal('flex')
    }

    function closeModal() {
        setmodal('none')
        NotificationManager.error('Creation Cancelled.');
    }

    function createPhotoAlbum() {
        openModal();
        setalbumType('Photo')
    }

    function createVideoAlbum() {
        openModal();
        setalbumType('Video')
    }

    function createFileAlbum() {
        openModal();
        setalbumType('File')
    }

    function createAudioAlbum() {
        openModal();
        setalbumType('Audio')
    }

    const [dirName, setDirName] = useState('');
    const [message, setMessage] = useState('');

    const createAlbumFolder = async () => {
        try {
            console.log('Directory name:', dirName);
            const response = await axios.get(`http://localhost:8000/create/?dirName=${dirName}&albumType=${albumType}`);
            setMessage(response.data);
            console.log(response.data);
            console.log(message);
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error creating directory');
        }
        setmodal('none');
        NotificationManager.success(`${dirName}`, `Created Successfully`);
    };

    const handleInputChange = (event) => {
        setDirName(event.target.value);
        console.log(event.target.value);
    };

    return (
        <main>
            <NotificationContainer />
            <div className='createModal' style={{ display: modal }}>
                <div className='createModalContent'>
                    <div className='inputFiles'>
                        <input type='text' name='createAlbumInput' placeholder='Enter your Title here...' onChange={handleInputChange} />
                        <div className='albumType'>Type : {albumType}</div>
                    </div>
                    <div className='modalBtns'>
                        <button className='createAlbum' onClick={createAlbumFolder}>Create Album</button>
                        <button className='closeModal' onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
            <Nav />
            <div className='createContent'>
                <h1 className='createHeading'>Create Your | Albums</h1>
                <h3 className='createSubHeading'>Select | type of Your Album.</h3>
                <div className='createSelectionBtns'>
                    <button onClick={createPhotoAlbum}>Photos</button>
                    <button onClick={createVideoAlbum}>Videos</button>
                    <button onClick={createFileAlbum}>Files</button>
                    <button onClick={createAudioAlbum}>Audios</button>
                </div>
            </div>
        </main>
    )
}

export default CreateRoute