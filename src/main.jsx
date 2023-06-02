import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProveider from './Proveider/AuthProveider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <AuthProveider>
        <RouterProvider router={router} />
      </AuthProveider>
    </div>
  </React.StrictMode>,
)
