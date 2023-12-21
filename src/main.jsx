import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Routes from './routes/Routes.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='overflow-x-hidden'>
      <DndProvider backend={HTML5Backend}>
      <AuthProviders>
        <Toaster />
        <RouterProvider router={Routes} />
      </AuthProviders>
      </DndProvider>

    </div>
  </React.StrictMode>,
)
// overflow-x-hidden