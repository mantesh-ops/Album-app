import React, { useState, useEffect } from 'react';
import './AlbumContentContainer.css'
import axios from 'axios';

function AlbumContentContainer({ albumType }) {
    const [folders, setFolders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFolders = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/folders/?albumType=${albumType}`);
                setFolders(response.data.folders);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchFolders();
    }, [albumType]);

    return (
        <div className='AlbumContainer'>
            {error && <p>Error: {error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Album Name</th>
                        <th>Items</th>
                        <th>Size</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {folders.map((folder, index) => {
                        return (
                            <FolderTable name={folder.name} items={folder.items} size={folder.size} time={folder.created.toString()} key={index} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AlbumContentContainer;

function FolderTable({ name, size, time, items }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{items}</td>
            <td>{size}</td>
            <td>{time}</td>
        </tr>
    )
}
