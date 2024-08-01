import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import createRoute from './Routes/createRoute';
import recentsRoute from './Routes/recentsRoute';
import AlbumRoute from './Routes/AlbumRoute';
import photosAlbum from './Routes/photosAlbum'
import videosAlbum from './Routes/videosAlbum'
import filesAlbum from './Routes/filesAlbum'
import audiosAlbum from './Routes/audiosAlbum'
import signUp from './Routes/signUp';

let allRoutes = createBrowserRouter(
  [
    {
      path: '/',
      Component: App
    },
    {
      path: 'create',
      Component: createRoute
    },
    {
      path: 'recent',
      Component: recentsRoute
    },
    {
      path: 'album',
      Component: AlbumRoute
    },
    {
      path: 'album/photos',
      Component: photosAlbum
    },
    {
      path: 'album/videos',
      Component: videosAlbum
    },
    {
      path: 'album/files',
      Component: filesAlbum
    },
    {
      path: 'album/audios',
      Component: audiosAlbum
    },
    {
      path: 'signUp',
      Component: signUp
    },
  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
