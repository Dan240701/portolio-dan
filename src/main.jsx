import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ColorModeScript } from '@chakra-ui/react';

import App from './App.jsx'
import "./styles/styles.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
)
