import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import {  HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className='max-w-5xl mx-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
