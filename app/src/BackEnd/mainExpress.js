const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const port = 8000;

app.use(cors());

app.get('/create', async (req, res) => {
    try {
        const dirName = req.query.dirName;
        const albumType = req.query.albumType;

        if (!dirName) {
            throw new Error('Directory name not provided');
        }

        const mainDirPath = path.join(__dirname, `../AllCreatedAlbums/${albumType}`, dirName);

        // Create the directory
        await fs.mkdir(mainDirPath);

        res.send(`New directory created successfully: ${dirName}`);

        // const subDirPath = path.join(`..AllCreatedAlbums/${albumType}`);

    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.get('/folders', async (req, res) => {
    try {
        const albumType = req.query.albumType;
        const albumsDirPath = path.join(__dirname, `../AllCreatedAlbums/${albumType}/`);

        const folders = await fs.readdir(albumsDirPath);
        const foldersWithInfo = await Promise.all(folders.map(async (folder) => {
            const folderPath = path.join(albumsDirPath, folder);
            const folderStat = await fs.stat(folderPath);
            return {
                name: folder,
                size: folderStat.size,
                items: folderStat.isDirectory() ? await getFolderItemCount(folderPath) : 0,
                created: folderStat.birthtime.toLocaleDateString()
            };
        }));

        res.json({ albumType, folders: foldersWithInfo });
    } catch (error) {
        console.error('Error reading folders:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

async function getFolderItemCount(folderPath) {
    const items = await fs.readdir(folderPath);
    return items.length;
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
