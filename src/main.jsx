import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { CartApp } from './CartApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CartApp />
    </React.StrictMode>,
  </BrowserRouter>
)