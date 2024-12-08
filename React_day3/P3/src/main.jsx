import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.js';
import Form from './App.jsx'
import HybridForm from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    <HybridForm />
  </StrictMode>,
)
