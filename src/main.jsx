import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles'
 
import { theme } from './theme.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
     
        <App/>
    </ThemeProvider>
)
